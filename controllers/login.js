const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body

    const user = await User.findOne({ username: body.username })
    const passwordCorrect = user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash)

    if (!user) {
      return response.status(401).json({
        error: 'A user with the provided username was not found'
      })
    } else if (user && !passwordCorrect) {
      return response.status(401).json({
        error: 'invalid password'
      })
    }

    const userForToken = {
      username: user.username,
      id: user._id,
    }
    // eslint-disable-next-line no-undef
    const token = jwt.sign(userForToken, process.env.SECRET)

    response
      .status(200)
      .send({ token, username: user.username, name: user.name })

  } catch (error) {
    next(error)
  }
})

module.exports = loginRouter
