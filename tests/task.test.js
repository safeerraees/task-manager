const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')

const { taskOne, 
    taskTwo, 
    taskThree, 
    userOneId, 
    userOne, 
    userTwo,
    setupDatabase
 } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should create task for user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            description: 'From my test'
        })
        .expect(201)
    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.completed).toEqual(false)
})

test('Should fetch user\'s tasks', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    expect(response.body.length).toEqual(1)
})

test('Shouldn\'t delete other user\'s tasks', async () => {
    await request(app)
    .delete(`/task/${taskTwo._id}`)
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(404)

    const task = await Task.findById(taskTwo._id)
    expect(task).not.toBeNull()
})