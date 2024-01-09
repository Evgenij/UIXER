// const ApiError = require('../error/ApiError')
// const {User} = require("../models/models");
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const UserDTO = require("../dto/UserDTO");
//
// const generateJWT = (id, username, role) => {
// 	return jwt.sign(
// 		{id, username, role},
// 		process.env.SECRET_KEY_JWT,
// 		{
// 			expiresIn: '24h'
// 		}
// 	)
// }

class UserController {
	async foo(req, res) {
		return res.status(200).json({
			mess: 'OK'
		})
	}
}

module.exports = new UserController()