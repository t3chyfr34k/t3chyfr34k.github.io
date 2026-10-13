import test from 'node:test'
import assert from 'node:assert/strict'
import {existsSync,readFileSync,readdirSync} from 'node:fs'
import {join,resolve} from 'node:path'
const root=process.cwd()
function walk(d){return readdirSync(d,{withFileTypes:true}).flatMap(e=>{const p=join(d,e.name);return e.isDirectory()?walk(p):[p]})}
test('entry point, favicon and portrait exist',()=>{const h=readFileSync(join(root,'index.html'),'utf8');assert.match(h,/src="\\/qxjvmbn\\/asdkjfh\\.tsx"/);assert.ok(existsSync(join(root,'public/qplmnb.svg')));assert.ok(existsSync(join(root,'public/xjdhqwe.png')))})
test('metadata includes general technology positioning',()=>{const h=readFileSync(join(root,'index.html'),'utf8');assert.match(h,/name="description"/);assert.match(h,/property="og:description"/);assert.match(h,/Software Development/)})
test('relative source imports resolve',()=>{const files=walk(join(root,'qxjvmbn')).filter(p=>/\\.(tsx?|css|mjs)$/.test(p));const ex=['','.ts','.tsx','.js','.jsx','.mjs','.mts','.css','.json','/index.ts','/index.tsx'];const missing=[];for(const f of files){const s=readFileSync(f,'utf8');for(const m of s.matchAll(/(?:from\\s*|import\\s*)['"]([^'"]+)['"]/g)){if(!m[1].startsWith('.'))continue;const b=resolve(join(f,'..'),m[1]);if(!ex.some(x=>existsSync(b+x)))missing.push(f+': '+m[1])}}assert.deepEqual(missing,[])})
test('CI includes lint, tests and build and avoids PR deployment',()=>{const w=readFileSync(join(root,'.github/workflows/deploy.yml'),'utf8');assert.match(w,/pull_request:/);assert.match(w,/run: npm run lint/);assert.match(w,/run: npm test/);assert.match(w,/run: npm run build/);assert.match(w,/if: github\\.event_name != 'pull_request'/)})
test('package exposes test script',()=>assert.equal(JSON.parse(readFileSync(join(root,'package.json'),'utf8')).scripts.test,'node --test'))
