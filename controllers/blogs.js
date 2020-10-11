const blogsRouter = require('express').Router()
// const logger = require('../utils/logger')
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response, next) => {
  const blogs = await Blog.find({})
  try {
    if (blogs) {
      response.json(blogs)
    } else {
      response.status(500).end()
    }
  } catch (error) {
    next(error)
  }
})

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body

  if (!body || !body.title || !body.author || !body.url) {
    return response.status(400).json({
      error: 'Content missing'
    })
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0
  })

  const savedBlog = await blog.save()
  try {
    response.json(savedBlog)
  } catch (error) {
    next(error)
  }
})

module.exports = blogsRouter
