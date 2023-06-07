class Completing_Form{
    completeForm() {
        cy.get('#first-name').type('Marko')
        cy.get('#last-name').type('Markovic')
        cy.get('#postal-code').type('0123456789')
        cy.get('input[type="submit"]').click()
        cy.get('#finish').click()
    }
}
export default Completing_Form