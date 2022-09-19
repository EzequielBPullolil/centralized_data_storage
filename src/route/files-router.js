const Router = require('express').Router;
const FileRouter = Router();

const StorageFileInServer = require('src/services/storage-file-in-server')
FileRouter.route('/')
    .get((req, res) => {
        return res.status(200).json({
            files: []
        })
    })
    .post((req,res)=>{
        const fileToSave = req.files.file;
        StorageFileInServer(fileToSave, "testUUID");
        return res.status(201).json({
            status:`The file ${fileToSave.name} was stored in server`
        })
    })


module.exports = FileRouter;