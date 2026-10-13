import test from 'node:test'
import assert from 'node:assert/strict'
import { findProjectBySlug, searchTroubleshootingArticles } from '../qxjvmbn/xgewyguffwhc/portfolioUtils.mjs'
const projects=[{slug:'it-support'},{slug:'data'}]
const articles=[{title:'DNS failure',errorMessage:'NXDOMAIN',category:'DNS',keywords:['nslookup'],symptoms:['domain fails'],checks:['ipconfig'],solutions:['flush cache']},{title:'Connection refused',errorMessage:'connection refused',category:'APIs',keywords:['port'],symptoms:['socket rejected'],checks:['listener'],solutions:['start service']}]
test('finds project by slug',()=>assert.equal(findProjectBySlug(projects,'data'),projects[1]))
test('unknown slug returns null',()=>assert.equal(findProjectBySlug(projects,'missing'),null))
test('empty search returns all articles',()=>assert.deepEqual(searchTroubleshootingArticles(articles,'  '),articles))
test('search matches error and keyword case-insensitively',()=>{assert.deepEqual(searchTroubleshootingArticles(articles,'NXDOMAIN'),[articles[0]]);assert.deepEqual(searchTroubleshootingArticles(articles,'PORT'),[articles[1]])})
test('search matches checks and solutions',()=>{assert.deepEqual(searchTroubleshootingArticles(articles,'flush cache'),[articles[0]]);assert.deepEqual(searchTroubleshootingArticles(articles,'listener'),[articles[1]])})
test('unmatched search returns empty',()=>assert.deepEqual(searchTroubleshootingArticles(articles,'no match'),[]))
