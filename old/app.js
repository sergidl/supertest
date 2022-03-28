import express from "express";
import fs from 'fs'
import userController from '../controllers/userController.js';
import supertest from 'supertest'
const app = express();
app.use(express.json());
const request = supertest(app)

app.route('/user')
	.get(userController.getAllUsers) // get('/',function (req, res) {})
	.post(userController.createUser)
	.put(userController.updateUser)
	.delete(userController.removeUser)
app.route('/user/:id')
	.get(userController.getUserById)




//Supertest POST 1
request(app)
	.post('/user')
	.send({
		"id": 11,
		"user": "john",
		"pass": "ripper"
	})
	.expect('Content-Type', /json/)
	.expect(200)
	.end(function (err, res) {
		if (err) throw err;
	});
//Supertest POST 2
request(app)
	.post('/user')
	.send({
		"id": 12,
		"user": "ricard",
		"pass": "profe"
	})
	.expect('Content-Type', /json/)
	.expect(200)
	.end(function (err, res) {
		if (err) throw err;
	});







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
	}

	)
})


















//Supertest GET 1
request(app)
	.get('/user')
	.expect('Content-Type', /json/)
	.expect(200)
	.end(function (err, res) {
		if (err) throw err;
	});
//Supertest GET 2
request(app)
	.get('/user/20')
	.expect(400)
	.end((err, res) => {
		if (err) throw err;
	});

//Supertest PUT 1
request(app)
	.put('/user')
	.send({
		"id": 1,
		"user": "john",
		"pass": "ripper"
	})
	.expect('Content-Type', /json/)
	.expect(200)
	.end(function (err, res) {
		if (err) throw err;
	});

//Supertest PUT 2
request(app)
	.put('/user')
	.send({
		"id": 11,
		"user": "user",
		"pass": "ripper"
	})
	.expect('Content-Type', /json/)
	.expect(200)
	.end(function (err, res) {
		if (err) throw err;
	});


//Supertest DELETE 1
request(app)
	.delete('/user')
	.send({
		"id": 1,
	})
	.expect('Content-Type', /json/)
	.expect(200)
	.end(function (err, res) {
		if (err) throw err;
	});
//Supertest DELETE 1
request(app)
	.delete('/user')
	.send({
		"id": 1,
	})
	.expect(200)
	.end(function (err, res) {
		if (err) throw err;
	});
//Supertest GET 3
request(app)
	.get('/user/2')
	.expect('Content-Type', /json/)
	.expect(200)
	.end(function (err, res) {
		if (err) throw err;
	});
export default app;