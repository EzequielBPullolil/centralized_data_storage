const Router = require('express').Router;
const FileRouter = Router();

FileRouter.route('/')
    .get((req, res) => {
        return res.status(200).json('file router services on')
    })
    .post((req,res)=>{
        return res.status(201).json('file saved')
    })


module.exports = FileRouter;