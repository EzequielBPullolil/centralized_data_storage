const fs = require('fs')
const path = require('path')
const chai = require('chai')
const config = require('config')

const {expect} = chai


const StorageFileInServer = require('src/domain/file_storage/storage-file-in-server')
const {storage_folder} = config.get('centralized_data_storage')

describe('StorageFileInServer test', () => {
    const fileSuject = {
        name: 'aTxtFile.txt',
        data: fs.readFileSync('test/files/aTxtFile.txt',{ encoding: 'utf8' })
    }
    const storageFolderPath = path.resolve(storage_folder)
    const testPath = path.join(storageFolderPath, "aTxtFile.txt")
    it('Correct file save', async() => {
        const createdFile = await StorageFileInServer(fileSuject, "absds");

        fs.readFile(createdFile, (err, data)=>{
            if(err) throw err;
            
            expect(data).to.not.be.null;
        })
    });
});