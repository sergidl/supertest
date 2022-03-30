import app from '../app.js'
import supertest from 'supertest'
import { TestWatcher } from '@jest/core';

const request = supertest(app)

// CRUD create





describe('CRUD Create : POST /user', () => {
	describe('Given a user 11', () => {
		// Then response status 200
		test('Then response status 200', async () => {
			const response = await request.post('/users/').send({
				"id": 11,
				"user": "john",
				"pass": "ripper"
			})
			expect(response.statusCode).toBe(200);
		})
		// 
	})
	describe('Given a user 12', () => {
		// Then response status 200
		test('Then response status 200', async () => {
			const response = await request.post('/users/').send({
				"id": 12,
				"user": "ricard",
				"pass": "profe"
			})
			expect(response.statusCode).toBe(200);
		})
		// 
	})
})

describe('CRUD Create : GET /user', () => {
	describe('Given all users', () => {
		// Then response status 200
		test('Then response status 200', async () => {
			const response = await request.get('/users/')
			expect(response.statusCode).toBe(200);
		})
		// 
	})
	describe('Given a user 20', () => {
		// Then response status 400
		test('Then response status 400', async () => {
			const response = await request.get('/users/20')
			expect(response.statusCode).toBe(400);
		})
		// 
	})
	describe('Given a user 2', () => {
		// Then response status 200
		test('Then response status 200', async () => {
			const response = await request.get('/users/2')
			expect(response.statusCode).toBe(200);
		})
		// 
	})
})


describe('CRUD Create : PUT /user', () => {
	describe('Given a user 1 change user', () => {
		// Then response status 200
		test('Then response status 200', async () => {
			const response = await request.put('/users/').send({
				"id": 1,
				"user": "john",
				"pass": "ripper"
			})
			expect(response.statusCode).toBe(200);
		})
		// 
	})
	describe('Given a user 11 change user', () => {
		// Then response status 200
		test('Then response status 200', async () => {
			const response = await request.put('/users/').send({
				"id": 11,
				"user": "ricard",
				"pass": "profe"
			})
			expect(response.statusCode).toBe(200)
		})
		// 
	})
})



describe('CRUD Create : DELETE /user', () => {
	describe('Given a user 1 delete it', () => {
		// Then response status 200
		test('Then response status 200', async () => {
			const response = await request.delete('/users/').send({
				"id": 1
			})
			expect(response.statusCode).toBe(200);
		})
		// 
	})
	describe('Given a user 11 delete it', () => {
		// Then response status 200
		test('Then response status 200', async () => {
			const response = await request.delete('/users/').send({
				"id": 11
			})
			expect(response.statusCode).toBe(200);
		})
		// 
	})
})

