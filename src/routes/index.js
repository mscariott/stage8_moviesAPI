const { Router } = require("express")

const usersRouter = require("./users.route")
const notesRouter = require("./notes.route")
const tagsRouter = require("./tags.route")


const routes = Router()

routes.use("/notes", notesRouter)
routes.use("/users", usersRouter)
routes.use("/tags", tagsRouter)


module.exports = routes