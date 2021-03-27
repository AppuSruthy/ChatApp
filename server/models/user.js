const mongoose = require('mongoose');

const db ="mongodb+srv://userone:userone@ictakfiles.m3fcx.mongodb.net/users1?retryWrites=true&w=majority"
mongoose.connect(db,err => {
    if(err){
        console.error('Error' + err)
    }else{
        console.log('Connected to mongodb')
    }
})


const Schema = mongoose.Schema //to get an instance of mongoose schema
const userSchema = new Schema({
    email: String,
    password: String,
    uname: String
})

module.exports = mongoose.model('user',userSchema,'users1')//name of (model,schema,database we have created)