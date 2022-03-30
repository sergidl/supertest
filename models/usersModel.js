import user from './users/users.js';
import userPojo from './users/userPojo.js';


class UsersModel {


    getUsers() {

        // console.log("---> usersModel::getUsers");

        const users = user.getUsers();

        return users;
    }

    getUserById(id) {

        // console.log(`---> usersModel::getUserById = ${id}`);

        const _user = user.getUserById(id);
        if (typeof _user == 'undefined')
            throw new Error('Ups! user no existe');

        return _user;
    }

    removeUser(id) {

        // console.log(`---> usersModel::removeUser = ${id}`);

        const index = user.removeUser(id);
        return index;
    }


    


    createUser(req) {

        // console.log(`---> usersModel::createUser = ${req.id}`);

        const new_user = userPojo(req);
        if (typeof new_user == 'undefined')
            throw new Error('Ups! Error new_user');


        user.createUser(new_user);
    }

    updateUser(req) {
        // console.log(`---> usersModel::updateUser = ${req.id}`);

        const new_user = userPojo(req);
        if (typeof new_user == 'undefined')
            throw new Error('Ups! Error new_user');


        const _user = user.updateUser(new_user);
        if (typeof _user == 'undefined')
            throw new Error('Ups! Error al actualizar User');


    }



}

export default new UsersModel()