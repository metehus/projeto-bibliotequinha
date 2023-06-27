const express = require('express');
const AuthController = require('../controllers/auth');
const authRouter = express.Router();

authRouter.post('/register', AuthController.register);

module.exports = authRouter;