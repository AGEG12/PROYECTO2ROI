const {Schema,model} = require('mongoose');
const userSchema = new Schema({
    name: String,
    lastname: String,
    cellphone: String,
    email: String,
    PASSWORD: String,
    registrationDate: Date
})

module.exports = model('User',userSchema);