const blogsRouter = require('express').Router()
// const logger = require('../utils/logger')
const Blog = require('../models/blog')

blogsRouter.get('/', (request, response, next) => {
  Blog
    .find({})
    .then(blogs => {
      if (blogs) {
        response.json(blogs)
      } else {
        response.status(500).end()
      }
    })
    .catch(e => {
      response.status(500).end()
      next(e)
    })
})

blogsRouter.post('/', (request, response, next) => {
  const body = request.body
  // logger.info(body)

  if (!body || !body.title || !body.author) {
    return response.status(400).json({
      error: 'Content missing'
    })
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  })

  blog
    .save()
    .then(savedBlog => savedBlog.toJSON())
    .then(savedAndFormatedBlog => {
      response.json(savedAndFormatedBlog)
    })
    .catch(error => next(error))
})

module.exports = blogsRouter
