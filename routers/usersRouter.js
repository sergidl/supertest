import Router from "express"
import { getAllUsers, getUserById, removeUser, createUser, updateUser } from '../controller/userController.js'

const router = Router()
router.route("/")
    .get(userController.getAllUsers) // get('/',function (req, res) {})
    .post(userController.createUser)
    .put(userController.updateUser)
    .delete(userController.removeUser)
router.route('/:id')
    .get(userController.getUserById)

export default router