import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public')

// Largest dimension we want for thumbs / hero shots. We never display
// larger than this in the UI, so anything above is wasted bytes.
const MAX_WIDTH = 1280
const PNG_QUALITY = 78
const WEBP_QUALITY = 72

function fmtSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const out = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...(await walk(full)))
    } else {
      out.push(full)
    }
  }
  return out
}

async function compressPng(file) {
  const before = (await fs.stat(file)).size
  const buf = await fs.readFile(file)
  let pipeline = sharp(buf)
  const meta = await pipeline.metadata()
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
  }
  const out = await pipeline
    .png({
      quality: PNG_QUALITY,
      compressionLevel: 9,
      palette: true,
      effort: 10,
    })
    .toBuffer()
  if (out.length < before) {
    await fs.writeFile(file, out)
    return { before, after: out.length, changed: true }
  }
  return { before, after: before, changed: false }
}

async function makeWebpFromPng(file) {
  const webpPath = file.replace(/\.png$/i, '.webp')
  const buf = await fs.readFile(file)
  let pipeline = sharp(buf)
  const meta = await pipeline.metadata()
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
  }
  const out = await pipeline.webp({ quality: WEBP_QUALITY, effort: 6 }).toBuffer()
  await fs.writeFile(webpPath, out)
  return { webpPath, size: out.length }
}

async function makeWebpFromGif(file) {
  const webpPath = file.replace(/\.gif$/i, '.webp')
  const buf = await fs.readFile(file)
  let pipeline = sharp(buf, { animated: true })
  const meta = await pipeline.metadata()
  if (meta.pageWidth && meta.pageWidth > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
  }
  const out = await pipeline
    .webp({
      quality: WEBP_QUALITY,
      effort: 6,
      smartSubsample: true,
    })
    .toBuffer()
  await fs.writeFile(webpPath, out)
  return { webpPath, size: out.length }
}

async function main() {
  const files = await walk(PUBLIC_DIR)
  const summary = []

  for (const file of files) {
    const lower = file.toLowerCase()
    const rel = path.relative(PUBLIC_DIR, file)
    try {
      if (lower.endsWith('.png')) {
        const stat = await fs.stat(file)
        const original = stat.size
        const png = await compressPng(file)
        const webp = await makeWebpFromPng(file)
        summary.push({
          file: rel,
          kind: 'png',
          original,
          png: png.after,
          webp: webp.size,
        })
      } else if (lower.endsWith('.gif')) {
        const original = (await fs.stat(file)).size
        const webp = await makeWebpFromGif(file)
        summary.push({
          file: rel,
          kind: 'gif',
          original,
          png: null,
          webp: webp.size,
        })
      }
    } catch (err) {
      console.error(`! ${rel}: ${err.message}`)
    }
  }

  console.log('\n== compression summary ==')
  for (const row of summary) {
    const parts = [
      row.file.padEnd(46),
      `orig ${fmtSize(row.original).padStart(9)}`,
    ]
    if (row.png !== null) parts.push(`png→${fmtSize(row.png).padStart(8)}`)
    parts.push(`webp→${fmtSize(row.webp).padStart(8)}`)
    console.log(parts.join('  '))
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
