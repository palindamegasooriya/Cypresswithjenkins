describe('Csslocators', () => {
    it('Csslocators', () => {
   cy.visit("https://demo.nopcommerce.com/")
   cy.get("input#small-searchterms").type("T-shirt ")
   cy.get("button[type='submit']").click()


 })
   
  })