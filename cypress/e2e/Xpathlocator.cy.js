describe('Xpath locator', () => {
    it('find number of products', () => {
      cy.visit("https://demo.nopcommerce.com/")
      cy.title().should('eq','nopCommerce demo store')
    })
  })