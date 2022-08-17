const {storage_folder} = require('config').get('centralized_data_storage');
const fs = require('fs')
    ,path = require('path')
    ,moment = require('moment');

const createUserFolder = require('src/services/create-user-folder');
const createMonthYearFolder = requirie('src/services/create-month-year-folder')
module.exports = (fileBuffer, userUUID)=>{

    /**
     * Save the file in the folder of the
     * current month and year that belongs 
     * to the user with the userUUID
     * 
     * If the user folder not exist create it 
     * 
     * if the user/month-year folder not exist create it
     */
    const absolutePathToStorageFolder = path.resolve(storage_folder);
    const userFolderPath = path.join(absolutePathToStorageFolder, userUUID);
    const monthYearFolderPath = path.join(userFolderPath, actualMonthYear)
    if(!fs.existsSync(userFolderPath)) createUserFolder(userUUID)
    if(!fs.existsSync(monthYearFolderPath))  createMonthYearFolder(userUUID);
}