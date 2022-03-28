import app from '../app.js'
import supertest from 'supertest'
import { TestWatcher } from '@jest/core';

const request = supertest(app)

// CRUD create

describe('CRUD Create : POST /user', () => {
	describe('Given a user and password', () => {
		// Then response status 200
		test('Then response status 200', async () => {
			const response = await request.post('/users/register').send({
				username: 'pep@domini.es',
				password: 'pam'
			})
			expect(response.statusCode).toBe(200);
		})
		// Then return 'content-type' application/json
		test("Then return 'content-type' application/json", async () => {
			const response = await request.post('/users/register').send({
				username: 'pep@domini.es',
				password: 'pam'
			})
				.expect("Content-Type", /json/);
		})
		// Then have username on JSON request
		test("Then have username on JSON request", async () => {
			const response = await request.post('/users/register').send({
				username: 'pep@domini.es',
				password: 'pam'
			})
			expect(response.body.username).toBe('lele');
		})
		// 
	}

	)
})
describe('CRUD Read : GET /user', () => {
	describe('Dado (given) un usuario y un password', () => {
		//(then) Deberia respoder status code 200;
		//(then) Deberia devolver el password encriptado;
		//(then) Deberia devolver un timestamp"
		//(then) ...   
	}
	)
});