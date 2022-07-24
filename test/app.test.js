//Test module configs
const chai = require('chai')
    , chaiHttp = require('chai-http')
chai.use(chaiHttp);
const {expect, request} = chai;

//App domain imports 
const  app = require('src/app');
describe('App test', () => {
    it('Service status request ', (done) => {
        request(app)
            .get('/')
            .end((err,res)=>{
                if(err) done(err);


                expect(res).to.have.status(200);
                done();
            });
    });
});