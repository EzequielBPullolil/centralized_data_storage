const fs = require('fs')
    ,path = require('path')

const {storage_folder} = require('config').get('centralized_data_storage');

module.exports = (userUUID)=>{
    /**
     * create the folder that belongs to the user
     * with the user UUID passed by parameter
     */
    const absolutePathToStorageFolder = path.resolve(storage_folder)
    const folderPath = path.join(absolutePathToStorageFolder, userUUID)

    if(fs.existsSync(folderPath)) throw new Error('User folder already created');


    fs.mkdirSync(folderPath);


}