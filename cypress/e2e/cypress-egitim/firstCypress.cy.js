describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })

  describe('My second Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(false)
    })
  })

  describe('My First Page Test', () => {
    it('clicks the link "type"', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
    })
  })