const Router = require('express').Router;
const FileRouter = Router();

FileRouter.route('/')
    .get((req, res) => {
        return res.status(200).json('File router services on')
    })
    .post((req,res)=>{
        const fileToSave = req.files.file;
        return res.status(201).json(`The file "${fileToSave.name}" was saved.`)
    })


module.exports = FileRouter;