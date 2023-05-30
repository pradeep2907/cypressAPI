describe('Validate Post request', () => {

    it('Run Post request and check result', () => {
        cy.request({
            method: 'POST',
            url: `https://reqres.in/api/users`,
            failOnStatusCode: false,
            header: {
                'Accept-Encoding': 'application/json', 
                'Content-Type' : 'application/json',
            },
            body: {"name": "morpheus11111","job": "leader"}
        }).as('details')
        //Validate status code
        cy.get('@details').its('status').should('eq', 201)
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
    });

});
