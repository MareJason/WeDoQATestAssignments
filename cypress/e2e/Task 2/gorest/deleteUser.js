describe('Update User API Test', () => {
  it('should update user details', () => {
    const userId = 2411720; 

    cy.request({
      method: 'DELETE',
      url: `https://gorest.co.in/public/v2/users/${userId}`,
      headers: {
        'Authorization': 'Bearer fc01900a545928ab9a33dc05ccf59a714991c621ff34dfa0ffc04dc786941bc5',
        'Content-Type': 'application/json',
      },
      body: {
        name: 'Miroslav',
        gender: 'male',
        email: 'mare@gmail.com',
        status: 'active',
      },
    }).then((response) => {
      expect(response.status).to.eq(204);
      
    });
  });
})