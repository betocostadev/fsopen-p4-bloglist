const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../src/app')
const api = supertest(app)

const Blog = require('../models/blog')

beforeEach(async() => {
  await Blog.deleteMany({})

  let blogObject = new Blog(helper.initialBlogs[0])
  await blogObject.save()

  blogObject = new Blog(helper.initialBlogs[1])
  await blogObject.save()
})

describe('api tests', () => {

  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(helper.initialBlogs.length)
  })

  test('a valid blog can be added', async () => {
    const newBlog = {
      title: 'Full Stack Open Part 4',
      author: 'Bob Back',
      url: 'https://fullstackopen.com/en/part4/testing_the_backend',
      likes: 1000
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    // console.log(blogsAtEnd)
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

    const title = blogsAtEnd.map(b => b.title)
    expect(title).toContain('Full Stack Open Part 4')
  })

  test('object ID to be defined as id', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
  })

  test('a new blog with the likes property is missing, if so, should be 0', async () => {
    const newBlog = {
      title: 'Full Stack Open Part 4B',
      author: 'Mattias',
      url: 'https://fullstackopen.com/en/part4/',
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd[2].likes).toBe(0)
  })

  test('a blog with no title cannot be added', async () => {
    const newBlog = {
      author: 'Bob Back',
      url: 'https://fullstackopen.com/en/part4/testing_the_backend',
      likes: 1000
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(400)
      .expect('Content-Type', /application\/json/)
  })

  test('a blog with no author cannot be added', async () => {
    const newBlog = {
      title: 'Full Stack Open Part 4B',
      url: 'https://fullstackopen.com/en/part4/testing_the_backend',
      likes: 1000
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(400)
      .expect('Content-Type', /application\/json/)
  })

  test('a blog with no title and url cannot be added', async () => {
    const newBlog = {
      author: 'Someone',
      likes: 1000
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(400)
      .expect('Content-Type', /application\/json/)
  })

})
afterAll(() => {
  mongoose.connection.close()
})
