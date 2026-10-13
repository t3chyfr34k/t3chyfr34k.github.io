import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = process.cwd()
function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? walk(path) : [path]
  })
}

test('entry point, favicon and portrait exist', () => {
  const html = readFileSync(join(root, 'index.html'), 'utf8')
  assert.ok(html.includes('src="/qxjvmbn/asdkjfh.tsx"'))
  assert.ok(existsSync(join(root, 'qxjvmbn/asdkjfh.tsx')))
  assert.ok(existsSync(join(root, 'public/qplmnb.svg')))
  assert.ok(existsSync(join(root, 'public/xjdhqwe.png')))
})

test('metadata includes general technology positioning', () => {
  const html = readFileSync(join(root, 'index.html'), 'utf8')
  assert.match(html, /name="description"/)
  assert.match(html, /property="og:description"/)
  assert.match(html, /Software Development/)
})

test('relative source imports resolve', () => {
  const files = walk(join(root, 'qxjvmbn')).filter((path) => /\.(tsx?|css|mjs)$/.test(path))
  const extensions = ['', '.ts', '.tsx', '.js', '.jsx', '.mjs', '.mts', '.css', '.json', '/index.ts', '/index.tsx']
  const missing = []
  for (const file of files) {
    const source = readFileSync(file, 'utf8')
    for (const match of source.matchAll(/(?:from\s*|import\s*)['"]([^'"]+)['"]/g)) {
      if (!match[1].startsWith('.')) continue
      const base = resolve(join(file, '..'), match[1])
      if (!extensions.some((suffix) => existsSync(base + suffix))) missing.push(`${file}: ${match[1]}`)
    }
  }
  assert.deepEqual(missing, [])
})

test('CI includes lint, tests and build and avoids PR deployment', () => {
  const workflow = readFileSync(join(root, '.github/workflows/deploy.yml'), 'utf8')
  assert.match(workflow, /pull_request:/)
  assert.match(workflow, /run: npm run lint/)
  assert.match(workflow, /run: npm test/)
  assert.match(workflow, /run: npm run build/)
  assert.match(workflow, /if: github\.ref == 'refs\/heads\/main' && github\.event_name != 'pull_request'/)
  assert.match(workflow, /group: \$\{\{ github\.workflow \}\}-\$\{\{ github\.ref \}\}/)
})

test('package exposes test script', () => {
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
  assert.equal(pkg.scripts.test, 'node --test')
})
