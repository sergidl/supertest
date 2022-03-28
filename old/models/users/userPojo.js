export default function user(data) {

    let _user = {}
    _user.id = data.id;
    _user.user=data.user
    _user.pass = data.pass;



    return _user;
}