context('Actions', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('.player-container > div ', {timeout: 3000}).should('have.length',28);

    })
    it('should filter players by name', () => {




        cy.get('input[type="text"]').type('eric');

        cy.get('.player-container > div')
            .should(($i) => {
                // should have found 3 elements
                expect($i).to.have.length(2)

            });
    });
    it('should filter players by age', () => {



        cy.get('input[type="number"]').type(22);

        cy.get('.player-container > div')
            .should(($i) => {
                // should have found 3 elements
                expect($i).to.have.length(3)

            });
    });

    it('should filter players by position', () => {

        cy.get('select').select('Keeper')

        cy.get('.player-container > div')
            .should(($i) => {
                // should have found 3 elements
                expect($i).to.have.length(4)

            });
    });
    it('should filter players by age', () => {

        cy.get('input[type="number"]').type(22);

        cy.get('.player-container > div')
            .should(($i) => {
                // should have found 3 elements
                expect($i).to.have.length(3)

            });
    });

    it('should filter players by multiple filters', () => {
        cy.get('input[type="text"]').type('Joel');
        cy.get('input[type="number"]').type(22);
        cy.get('select').select('Keeper')

        cy.get('.player-container > div')
            .should(($i) => {
                // should have found 3 elements
                expect($i).to.have.length(2)

            });
    });

    it('should filter players by multiple filters repeat', () => {
        cy.get('input[type="text"]').type('Joel');
        cy.get('input[type="number"]').type(22);
        cy.get('select').select('Keeper')

        cy.get('.player-container > div')
            .should(($i) => {
                // should have found 3 elements
                expect($i).to.have.length(2)

            });

        cy.get('select').select('')
        cy.get('input[type="text"]').clear();
        cy.get('.player-container > div')
            .should(($i) => {
                // should have found 3 elements
                expect($i).to.have.length(3)

            });


        cy.get('input[type="number"]').clear();
        cy.get('.player-container > div')
            .should(($i) => {
                // should have found 3 elements
                expect($i).to.have.length(28)

            });
    });

});
