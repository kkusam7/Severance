import test from 'node:test';import assert from 'node:assert/strict';import {rooms,WORLD,addWall,hitsWall,clampWorld} from './layout.js';
test('four demo rooms have unique ids',()=>{assert.equal(rooms.length,4);assert.equal(new Set(rooms.map(r=>r.id)).size,4)});
test('world boundary',()=>{assert.equal(clampWorld(30,0),true);assert.equal(clampWorld(0,0),false)});
test('collision',()=>{addWall(0,0,2,.2);assert.equal(hitsWall(0,0),true);assert.equal(hitsWall(10,10),false)});
