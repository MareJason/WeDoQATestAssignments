
describe('Update User API Test', () => {
  it('should update user details', () => {
    const userId = 2406398;

    const faker = require('faker');
    const updatedName = faker.name.findName();
    const email = faker.internet.email();

    cy.request({
      method: 'PUT',
      url: `https://gorest.co.in/public/v2/users/${userId}`,
      headers: {
        'Authorization': 'Bearer fc01900a545928ab9a33dc05ccf59a714991c621ff34dfa0ffc04dc786941bc5',
        'Content-Type': 'application/json',
      },
      body: {
        name: updatedName,
        gender: 'female',
        email: email,
        status: 'inactive',
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

    });
  });
});
