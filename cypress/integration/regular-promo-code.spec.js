describe('Should return discount in specific item by type of promocode',() =>{
    it('Proceed to checkout by add comics in the cart', () => {
        cy.visit('/');
        cy.get('[data-cy=comicBuy').click({multiple:true});
        cy.get('[data-cy=quantityBadge').as('quantity');
        cy.get('@quantity').should('contain', 20);
        cy.get('[data-cy=cartIcon').click();
        cy.get('[data-cy=checkoutButton').click();
    });

    it('Fill form with fake data and validate inputs', () => {
        cy.get('[data-cy=inputName]').type('Peter Spider Parker');
        cy.get('[data-cy=inputPhone]').type('12345678901');
        cy.get('[data-cy=inputEmail]').type('peterparker@marvel.com');
        cy.get('[data-cy=inputCity]').type('New York');
        cy.get('[data-cy=inputState]').type('NYC');
        cy.get('[data-cy=inputZip]').type('12345678');
        cy.get('[data-cy=inputAddress]').type('Broadway St, 1998');
        
    });

    it('Verify if regular promocode  was applied', () => {
        cy.get('[data-cy=totalValue').as('total');
        cy.get('[data-cy=inputPromoCode]').type('PROMONEOMARVEL');
        cy.get('[data-cy=addPromoCode]').click();
        cy.get('[data-cy=totalValue').as('newTotal');
        cy.get('@newTotal').should('not.equal', '@total');
        cy.get('[data-cy=finishOrder]').click();
        cy.get('[data-cy=goBackButton]').click();
    });
}) 