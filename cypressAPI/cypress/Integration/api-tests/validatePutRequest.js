describe('Validate Put request', () => {

    it('Run Put request and check result', () => {
        cy.request({
            method: 'PUT',
            url: `https://reqres.in/api/users/2`,
            failOnStatusCode: false,
            header: {
                'Accept-Encoding': 'application/json', 
                'Content-Type' : 'application/json',
            },
            body: {"name": "morpheus11111","job": "zion resident"}
        }).as('details')
        //Validate status code
        cy.get('@details').its('status').should('eq', 200)
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
    });

});
