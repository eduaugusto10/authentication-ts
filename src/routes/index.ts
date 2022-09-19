import { Router } from 'express'
import { OperationController } from '../controllers/OperationController'
import { SessionController } from '../controllers/SessionController'
import { UserController } from '../controllers/UserController'
import { authMiddleware } from '../middlewares/authMiddleware'

const routes = Router()

routes.post('/user', new UserController().store)
routes.post('/login', new SessionController().login)

routes.use(authMiddleware)
routes.get('/user/', new UserController().getProfile)
routes.get('/user/:id', new UserController().getUser)
routes.get('/users/', new UserController().getAllUsers)

routes.post('/operation', new OperationController().store)

export default routes