//imporing the files
const express=require('express')
const mongoose=require('mongoose')

//conneting the mogoose to the nodejs
mongoose.connect("mongodb+srv://Aribaskar-jb:r86j9DJTFMS9nXoK@crud.btnousx.mongodb.net/crud?retryWrites=true&w=majority")

// .then(()=>{
//     console.log("conet to the db");
// })
// .catch(()=>{
//     console.log("error")
// })

const app=express()
//this is the pointer for the database
const con =mongoose.connection
//this con,on will run the finsion when the db is active
con.on('open',()=>{
    console.log("coneted with the db")
})

app.use(express.json())
//this is the routing to the url in requs to the user.js files 
const users=require('./routers/users')
//this app.use will run firs when the app starts runing /users then redates to the users.js
app.use('/users',users)
//app is listen to the server

app.listen(9000,()=>{
    console.log("server started")
})