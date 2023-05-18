const mongoose=require('mongoose')

const usersSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    clg:{
        type:String,
        require:true,
    },
})
module.exports=mongoose.model('users',usersSchema)