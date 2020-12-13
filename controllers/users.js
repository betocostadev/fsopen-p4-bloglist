const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    if (!body || !body.username || !body.password) {
      return response.status(400).json({
        error: 'Content missing. username and password are required!'
      })
    } else if (body.username.length <= 3 || body.password.length <= 3) {
      return response.status(400).json({
        error: 'User name and password must have at least 4 characters each!'
      })
    }

    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash
    })

    const savedUser = await user.save()
    response.json(savedUser)

  } catch (error) {
    next(error)
  }
})

usersRouter.get('/', async (request, response, next) => {
  try {
    const users = await User
      .find({})
      .populate('blogs', { url: 1, title: 1, author: 1 })
    if (users) {
      response.json(users)
    } else {
      response.status(500).end()
    }
  } catch (error) {
    response.status(500).end()
    next(error)
  }
})

module.exports = usersRouter
