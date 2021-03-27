const mongoose = require('mongoose');

const db ="mongodb+srv://userone:userone@ictakfiles.m3fcx.mongodb.net/users1?retryWrites=true&w=majority"
mongoose.connect(db,err => {
    if(err){
        console.error('Error' + err)
    }else{
        console.log('Connected chat to mongodb')
    }
})


const Schema = mongoose.Schema //to get an instance of mongoose schema
const chatSchema = new Schema({
    sender: String,
    reciever: String,
    message: String,
    updated_at:{type:Date,default:Date.now},
});

module.exports = mongoose.model('chat',chatSchema,'chatroom')//name of (model,schema,database we have created)