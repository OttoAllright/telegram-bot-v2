import express from 'express'

const app = express()

const PORT = 3000

app.get("/",  (req, res)=>{
    res.send("<h1> Hi im a server notifier telegram bot</h1>")
})
app.listen(PORT, ()=>{
    console.log("server listenning on port",PORT)
})

//new