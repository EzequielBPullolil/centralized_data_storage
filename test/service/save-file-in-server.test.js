const fs = require('fs')
const path = require('path')
const chai = require('chai')
const config = require('config')

const {expect} = chai


const SaveFileInServer = require('src/services/save-file-in-server')
const {storage_folder} = config.get('centralized_data_storage')

describe('SaveFileInServer test', () => {
    const fileSuject = fs.readFileSync('test/files/aTxtFile.txt');
    const storageFolderPath = path.resolve(storage_folder)
    const testPath = path.join(storageFolderPath, "aTxtFile.txt")
    it('Correct file save', async() => {
        await SaveFileInServer(fileSuject, "absds");

        fs.readFile(testPath, (err, data)=>{
            if(err) throw err;
            
            expect(data).to.not.be.null;
        })
    });
});