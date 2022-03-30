import { ManagerFs } from '../../managers/manager-fs.js';

//'./data/users.json'

class Users {

    constructor() {
        this.mgfl = new ManagerFs('./users.json');
        this.users = this.mgfl.getData();

    }

    getUsers() {
        return this.users;
    }
    getUserById(id) {
        // console.log(`---> users::getUserById = ${id}`);

        return this.users.find(element => element.id == id);
    }

    removeUser(id) {
        // console.log(`---> users::removeUser = ${id}`);

        const index = this.users.findIndex(element => element.id == id);
        if (index != -1) this.users.splice(index, 1);
        return index;
    }

    createUser(req) {
        // console.log(`---> users::removeUser = ${req.id}`);
console.log(req)
        this.users.push(req);
        return req;
    }

    updateUser(req) {
        // console.log(`---> users::updateUser`);

        const user = this.getUserById(req.id);
        if (typeof user != 'undefined') {
            this.removeUser(req.id);
            this.createUser(req);
        }
        return user;
    }

}

export default new Users()