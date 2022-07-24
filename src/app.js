const express = require('express');
const fileUpload = require('express-fileupload')
const app = express()

//app configs
app.use(fileUpload())
//domain imports 

//app imports 
const FilesRouter = require('src/route/files-router')
app.get('/',(req,res)=>{
    return res.sendStatus(200)
})

app.use('/files', FilesRouter)
module.exports = app;