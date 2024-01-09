const Router = require('express')
const userRouter = new Router()
const userController = require('../controllers/UserController')
// const AuthMiddleware = require('../middleware/AuthMiddleware')

userRouter.get('/test', userController.foo)
// userRouter.post('/login', userController.login)
// userRouter.get('/auth', AuthMiddleware, userController.auth)

module.exports = userRouter