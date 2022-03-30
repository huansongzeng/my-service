const request = require('supertest');
const express = require('express');
const router = require('../router');

const app = new express();
app.use('/', router)

describe('route test', function(){
    const targetAttr = ["name", "apparent_t", "lat", "long"]

    it('response to/', async () => {
        const res = await request(app).get('/');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length > 0).toEqual(true);
        expect(Object.keys(res.body[0]).length).toEqual(4)
        for (let attr of targetAttr){
            expect(attr in res.body[0]).toBe(true)
        }
    })
})