require('./coneccion');

const User = require('./models/User');
// const ui = require('./ROI/SitioWeb/code');

nuevoUsuario = {
    name: 'Luis',
    lastname: 'Lopez',
    cellphone: '4596459685',
    email: 'luis@gmail.com',
    PASSWORD: '12345',
    registrationDate: new Date()
}

async function main() {
    const user = new User(nuevoUsuario);

const userSaved = await user.save();
return userSaved;
}
main()
.then(userSaved => console.log(userSaved))
.catch(err => console.log(err));


