describe('My First Test', () => {
    it('Verify tile - positive test', () => {
      cy.visit("https://demo.nopcommerce.com/")
      cy.title().should('eq','nopCommerce demo store')
    })

    // it('Verify tile - negative test', () => {
    //     cy.visit("https://demo.nopcommerce.com/")
    //     cy.title().should('eq','nopCommerce  storeone')
    //   })
  })