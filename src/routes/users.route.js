
const {Router} = require("express")


const UsersController = require("../controllers/usersController")
const UserMiddlewares = require("../middlewares/userMiddleware")


const usersRoutes = Router()
const usersController = new UsersController()
const userMiddleware = new UserMiddlewares()

usersRoutes.use(userMiddleware.warn)

usersRoutes.put("/:id", usersController.update)
usersRoutes.post("/", usersController.create)


module.exports = usersRoutes

