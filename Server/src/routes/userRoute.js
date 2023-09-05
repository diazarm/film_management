const {Router} = require('express');
const  {postUserHandler, getUserHandler, postLogHandler} = require('../handlers/userHandler')

const userRouter = Router();

userRouter.post("/", postUserHandler)

userRouter.get("/", getUserHandler)

userRouter.post("/login", postLogHandler)

module.exports = userRouter;