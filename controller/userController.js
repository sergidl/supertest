import HttpError from "http-errors";
import usersModel from '../models/usersModel.js';

const getAllUsers = (req, res) => {

    console.log("---> userController::getAllUsers");

    const users = usersModel.getUsers();
    res.json(users);
    console.log("---> userController::getAllUsers::DONE");
}

const getUserById = (req, res, next) => {

    console.log("---> usersController::getUserById");

    if (!req.params.id)
        next(HttpError(400, { message: 'no parameter found' }));
    try {

        const id = req.params.id;
        const user = usersModel.getUserById(id);
        res.json(user);
        console.log("---> usersController::getUserById::DONE");


    } catch (error) {
        next(HttpError(400, { message: error.message }));
    }

}

const removeUser = (req, res, next) => {
    console.log("---> usersController::removeUser");
    
    console.log(req.body)
    if (!req.body.id)
        next(HttpError(400, { message: 'no parameter found' }));

    const id = req.body.id;
    if (usersModel.removeUser(id) == -1) {
        next(HttpError(400, { message: 'Ups! User no existe' }));

    }

    getAllUsers(req, res);
    console.log("---> usersController::removeUser::DONE");


}

const createUser = (req, res, next) => {
    console.log(`---> usersController::createUser`);

    if (!req.body)
        next(HttpError(400, { message: 'Ups! parametro de entrada incorrecto' }));

    try {

        usersModel.createUser(req.body);
        getAllUsers(req, res);
        console.log(`---> usersController::createUser::DONE`);

    } catch (error) {
        next(HttpError(400, { message: error.message }));
    }

}

const updateUser = (req, res, next) => {
    console.log(`---> usersController::updateUser`);


    try {
        if (!req.body)
            next(HttpError(400, { message: 'Ups! parametro de entrada incorrecto' }));

        usersModel.updateUser(req.body);
        getAllUsers(req, res);
        console.log(`---> usersController::updateUser:DONE`);

    } catch (error) {
        next(HttpError(400, { message: error.message }));
    }
}


export default {
    getAllUsers,
    getUserById,
    removeUser,
    createUser,
    updateUser,
}