/// <reference types="cypress" />

describe('Post API Users List', () => {

    it('Post Users creation', () => {
        cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
             body: {
                "name": "morpheus11111",
                "job": "leader"
            }
        }).then((resp)=>{
            cy.log(JSON.stringify(resp))
           expect(resp.status).to.eq(201) 
        })
    });

});
