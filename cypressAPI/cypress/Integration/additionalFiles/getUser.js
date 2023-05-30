/// <reference types="cypress" />

describe('get API Users List', () => {

let accessToken = '48318506cdb8a4e8b7bd48b4b9297eee33d2b4334ba3e3bbeb4e8043cec9f06e'

    it('get Users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            header: {
                'authorization': 'Bearer '+accessToken
            }
        }).as('details')
        //Validate status code
        cy.get('@details').its('status').should('eq', 200)
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
    });

        it('get particular Users', () => {
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/2302199',
                header: {
                    'authorization': 'Bearer '+accessToken
                }
            }).then((resp)=>{
                cy.log(resp)
               expect(resp.status).to.eq(200) 
               expect(resp.body.name).to.eq('Mandakini Mehrotra')   
            })
    });

    it('Run get request and check result', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/2302199',
            header: {
                'authorization': 'Bearer '+accessToken
            }
            }).as('details')
        //Validate status code
        cy.get('@details').its('status').should('eq', 200)
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
    });

});
