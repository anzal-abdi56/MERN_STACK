require('dotenv').config()

const express = require("express")
const mongoose = require('mongoose')

const workoutRoute = require('./routes/workout')

//express app
const app = express()

//middlewares
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workout',workoutRoute)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Database is connected successfully")
    //listen for requests
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port `,process.env.PORT)
    })

})
.catch((e)=>{
    console.log(e)
})

