class Verifies_Order{
    verifyOrder() {
        cy.get('h2').should('have.text', 'Thank you for your order!')
    }
}
export default Verifies_Order
