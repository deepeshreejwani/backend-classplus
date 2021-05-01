const mongoose=require('mongoose');
const userInfoSchema=mongoose.Schema({
    name:{
            type:String,
            required:true
        },
    mobile:{
            type:Number,
            required:true
        },
    userImage:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('user_info', userInfoSchema);