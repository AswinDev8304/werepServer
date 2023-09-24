const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    uname:{
        type:String,
        // required:true,
        trim:true
    },
    mobile:{
        type:String,
        // required:true,
        trim:true,
        // unique:true,
        // minlength:10,
        // maxlength:13
    },
    psw:{
        type:String,
        // required:true,
    },
    booking:[]
})
const users= new mongoose.model('users',userSchema)
module.exports=users