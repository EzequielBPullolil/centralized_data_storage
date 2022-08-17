const fs = require('fs')
    , moment = require('moment')
    , path = require('path');
const { storage_folder } = require('config').get('centralized_data_storage');

module.exports = (userUUID) => {
    /**
     * Create the folder belonging to the
     * current month and year inside the folder of the user related 
     * to the userUUID passed by parameter
     */
    const actualMonthAndYear = moment().format('MM-YYYY');
    const absolutePathToStorageFolder = path.resolve(storage_folder)
    const folderPath = path.join(absolutePathToStorageFolder, userUUID, actualMonthAndYear)

    if (fs.existsSync(folderPath)) throw new Error('User folder already created');


    fs.mkdirSync(folderPath);
}