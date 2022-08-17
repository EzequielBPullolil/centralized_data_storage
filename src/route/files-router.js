const Router = require('express').Router;
const FileRouter = Router();

const SaveFileInServer = require('src/services/save-file-in-server')
FileRouter.route('/')
    .get((req, res) => {
        return res.status(200).json('File router services on')
    })
    .post(async(req,res)=>{
        const fileToSave = req.files.file;
        await SaveFileInServer(fileToSave);
        return res.status(201).json({
            status:`The file ${fileToSave.name} was stored in server`
        })
    })


module.exports = FileRouter;