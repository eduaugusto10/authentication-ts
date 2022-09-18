import { Router } from 'express'
import { SessionController } from '../controllers/SessionController'
import { UserController } from '../controllers/UserController'
import { authMiddleware } from '../middlewares/authMiddleware'

const routes = Router()

routes.post('/user', new UserController().create)
routes.post('/login', new SessionController().login)

routes.use(authMiddleware)
routes.get('/user/', new UserController().getProfile)
routes.get('/user/:id', new UserController().getUser)
routes.get('/users/', new UserController().getAllUsers)

export default routes