/// <reference types="cypress" />

describe('Post API Users List', () => {
let accessToken = '48318506cdb8a4e8b7bd48b4b9297eee33d2b4334ba3e3bbeb4e8043cec9f06e'

    it.only('Post Users creation', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": "Nannn5",
                "gender": "Male",
                "email":"NnnTest5@gmail.com",
                "status": "Active"
            }
        }).then((resp)=>{
            cy.log(JSON.stringify(resp))
           expect(resp.status).to.eq(201) 
        })
    });

});
