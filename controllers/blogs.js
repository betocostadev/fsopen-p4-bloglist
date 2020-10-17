/* eslint-disable no-undef */
const blogsRouter = require('express').Router()
const jwt = require('jsonwebtoken')
// const logger = require('../utils/logger')
const Blog = require('../models/blog')
const User = require('../models/user')

// Remove this function after adding it to a middleware
// const getTokenFrom = request => {
//   const auth = request.get('authorization')
//   if (auth && auth.toLowerCase().startsWith('bearer ')) {
//     return auth.substring(7)
//   }
//   return null
// }

blogsRouter.get('/', async (request, response, next) => {
  try {
    const blogs = await Blog
      .find({})
      .populate('user', { username: 1, name: 1 })
    if (blogs) {
      response.json(blogs)
    } else {
      response.status(500).end()
    }
  } catch (error) {
    next(error)
  }
})

blogsRouter.get('/:id', async (request, response, next) => {
  try {
    const blog = await Blog
      .findById(request.params.id)
      .populate('user', { username: 1, name: 1 })
    blog ? response.json(blog) : response.status(404).end()

  } catch (error) {
    next(error)
  }
})

blogsRouter.put('/:id', async (request, response, next) => {
  const body = request.body

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0
  }

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    response.json(updatedBlog)
  } catch (error) {
    next(error)
  }
})

blogsRouter.delete('/:id', async (request, response, next) => {
  try {

    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    if (!decodedToken) {
      return response.status(401).json({ error: 'missing or invalid token' })
    }

    const user = await User.findById(decodedToken.id)
    const blog = await Blog.findById(request.params.id)

    if (blog.user.toString() === user._id.toString()) {
      await Blog.deleteOne(blog)
      response.status(204).end()
    } else {
      return response.status(401).json({ error: 'invalid token' })
    }

  } catch (error) {
    next(error)
  }
})

blogsRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body
    // const token = getTokenFrom(request)
    // Token is now placed in the request using the middleware TokenExtractor
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    if (!decodedToken) {
      return response.status(401).json({ error: 'missing or invalid token' })
    }

    const user = await User.findById(decodedToken.id)

    if (!body || !body.title || !body.author || !body.url) {
      return response.status(400).json({
        error: 'Content missing'
      })
    }

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes || 0,
      user: user._id
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()

    response.json(savedBlog)

  } catch (error) {
    next(error)
  }
})

module.exports = blogsRouter
