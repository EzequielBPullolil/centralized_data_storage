//Test module configs
const chai = require('chai')
    , chaiHttp = require('chai-http')
chai.use(chaiHttp);
const {expect, request} = chai;

//App domain imports
const FilesRouter = require('src/route/files-router');
const app = require('src/app')
describe('FileRouter test', () => {
    it('Status test', (done) => {
        request(app)
            .get('/files')
            .set('content-type','json-application')
            .end((err,res)=>{
                if(err) done(err)

                expect(res).to.have.status(200)
                expect(res).to.be.json;
                done();
            })
    });
});