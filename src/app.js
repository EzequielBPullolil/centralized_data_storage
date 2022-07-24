const express = require('express');
const app = express();

//app configs
//domain imports 

//app imports 
const FilesRouter = require('src/route/files-router')
app.get('/',(req,res)=>{
    return res.sendStatus(200)
})

app.use('/files', FilesRouter)
module.exports = app;