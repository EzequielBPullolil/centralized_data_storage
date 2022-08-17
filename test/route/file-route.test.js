//Test and module configs
const chai = require('chai')
    , chaiHttp = require('chai-http')
    , deepEqualInAnyOrder = require('deep-equal-in-any-order')
chai.use(chaiHttp)
chai.use(deepEqualInAnyOrder)
const { expect, request } = chai
//Modules import
const fs = require('fs')
//App domain imports
const app = require('src/app')
describe('FileRouter test', () => {
    it('Status test', (done) => {
        request(app)
            .get('/files')
            .set('content-type', 'json-application')
            .end((err, res) => {
                if (err) done(err)

                expect(res).to.have.status(200)
                expect(res).to.be.json
                done()
            })
    })
    describe('POST request', () => {
        it('Send txt file', (done) => {
            request(app)
                .post('/files')
                .attach('file', fs.readFileSync('test/files/aTxtFile.txt'), 'aTxtFile.txt')
                .end((err, res) => {
                    if (err) done(err)
                    expect(res).to.have.status(201)
                    expect(res).to.be.json
                    expect(res.body)
                        .to
                        .have
                        .property('status')
                        .equal('The file aTxtFile.txt was stored in server')
                    done()
                })
        })
    })
}) 