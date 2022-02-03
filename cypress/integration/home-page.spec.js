describe('Tests in home page', () => {
    it('Visit home page', () => {
        cy.visit('/');
    });
    it('Must have component Header', () => {
        cy.get('[data-cy=logo').should('be.visible');
        cy.get('[data-cy=searchbar').should('be.visible');
        cy.get('[data-cy=cartIcon').should('be.visible');
    });
    it('Must have component Comic', () => {
        cy.get('[data-cy=comicImg').should('be.visible');
        cy.get('[data-cy=comicTitle').should('be.visible');
        cy.get('[data-cy=comicPrice').should('be.visible');
        cy.get('[data-cy=comicBuy').should('be.visible');
    });

    it('Visit comic individual page', () => {
        cy.get('[data-cy=comicTitle]').first().click();
        cy.get('[data-cy=comicImgIndividual]').should('be.visible');
        cy.get('[data-cy=comicTitleIndividual]').should('be.visible');
        cy.get('[data-cy=comicDescIndividual]').should('be.visible');
        cy.get('[data-cy=backButton]').should('be.visible');
        cy.get('[data-cy=backButton]').click();
    });

    it('Buy some comics', () => {
        cy.get('[data-cy=comicBuy').click({ multiple: true });
        cy.get('[data-cy=quantityBadge').as('quantity');
        cy.get('@quantity').should('contain', 20);
        cy.get('[data-cy=cartIcon').click();
    });

    it('Clear shopping cart by clicking remove, on individual comic', () => {
        cy.get('[data-cy=removeIndividual').click({ multiple: true });
        cy.get('[data-cy=cartIcon').click();
    });
    it('Clear shopping cart by clicking Clear', () => {
        cy.get('[data-cy=comicBuy').click({ multiple: true });
        cy.get('[data-cy=quantityBadge').as('quantity');
        cy.get('@quantity').should('contain', 20);
        cy.get('[data-cy=cartIcon').click();
        cy.get('[data-cy=clearCart]').click();
        cy.get('[data-cy=cartIcon').click();
    });

    it('Proceeds to checkout', () => {
        cy.get('[data-cy=comicBuy').click({ multiple: true });
        cy.get('[data-cy=quantityBadge').as('quantity');
        cy.get('@quantity').should('contain', 20);
        cy.get('[data-cy=cartIcon').click();
        cy.get('[data-cy=checkoutButton').click();
    });
});
