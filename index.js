//connecting .env file:
require('dotenv').config();
//import router
const router=require('./Routes/router')
const express=require('express')
const cors=require('cors')
//import db connections:
require('./dataBase/connections')

const server=express()

server.use(cors())
server.use(express.json())
server.use(router)
const port=4000||process.env.port
server.listen(port,()=>{
    console.log(".....server started.....");
})
