const Router = require('express').Router;
const FileRouter = Router();

FileRouter.get('/',(req,res)=>{
    return res.status(200).json('file router services on')
})


module.exports = FileRouter;