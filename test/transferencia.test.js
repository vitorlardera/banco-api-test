const request = require('supertest');
const{ expect } = require('chai');
require('dotenv').config()

describe('transferencias', () => {
    describe('POST /transferencias', () => {
        it('deve retornar sucesso com 201 quando o valor da transferencia for 10 ou acima', async () => {
            const respostaLogin = await request(process.env.BASE_URL)
                    .post('/login')
                    .set('Content-Type', 'application/json')
                    .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            const token = respostaLogin.body.token;

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ""
                })
                
                expect(resposta.status).to.equal(201)

        
                })
        it('deve retornar falha com 422 quando o valor da transferência for abaixo de 10', async () => {

            const respostaLogin = await request('http://localhost:3000')
                    .post('/login')
                    .set('Content-Type', 'application/json')
                    .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            const token = respostaLogin.body.token;

            const resposta = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 9,
                    token: ""
                })
                
                expect(resposta.status).to.equal(422)

        })
        
        
        })
    })
