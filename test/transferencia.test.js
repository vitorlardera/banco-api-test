const request = require('supertest');
const{ expect } = require('chai');
require('dotenv').config()
const{ obterToken } = require('../helpers/autenticacao')
const postTransferencias = require('../fixtures/postTrnasferencias.json')


describe('transferencias', () => {
        let token

        beforeEach( async () => {
            token = await obterToken('julio.lima', '123456')
        })
    
    describe('POST /transferencias', () => {


        it('deve retornar sucesso com 201 quando o valor da transferencia for 10 ou acima', async () => {
            const bodyTransferencias = { ...postTransferencias } 


            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)
                
                expect(resposta.status).to.equal(201)

        
                })
        it('deve retornar falha com 422 quando o valor da transferência for abaixo de 10', async () => {

            const bodyTransferencias = { ...postTransferencias }
            bodyTransferencias.valor = 7

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)
                
                expect(resposta.status).to.equal(422)

        })
        

        })

        describe('GET /transferencias', () => {
            it('Deve retornar 200 e dados iguais ao registro de transferencia do banco quando ID for válido', async () => {
                const resposta = await request(process.env.BASE_URL)

                    .get('/transferencias/25')
                    .set('authorization', `Bearer ${token}`)

                    expect(resposta.status).to.equal(200)
                    expect(resposta.body.id).to.equal(25)
                    expect(resposta.body.id).to.be.a('number')
                    expect(resposta.body.conta_origem_id).to.equal(1)
                })
        })
        describe('GET /transferencias', () => {
            it('Deve retornar 10 elementos na paginacao quando informar limite de 10 registros', async () => {
                const resposta = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization', `Bearer ${token}`)

                expect(resposta.status).to.equal(200)
                expect(resposta.body.limit).to.equal(10)
                expect(resposta.body.transferencias).to.have.lengthOf(10)

            })
        })
        
})
