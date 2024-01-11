describe('Pokedex', function() {
  it('front page can be opened', function() {
    test.cy.visit('http://localhost:5000')
    test.cy.contains('ivysaur')
    test.cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})