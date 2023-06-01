/// <reference types="Cypress" />

describe('Creating User via API Test', () => {

  it('should create a new user', () => {

    const faker = require('faker')
    const email = faker.internet.email()

    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {

        'Authorization': 'Bearer fc01900a545928ab9a33dc05ccf59a714991c621ff34dfa0ffc04dc786941bc5',
      },
      body: {
        name: 'Predrag Pazin',
        gender: 'male',
        email: email,
        status: 'active',
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
    })
  })
})