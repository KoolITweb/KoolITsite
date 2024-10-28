//make url a variable to be able to test against localhost and against live version
//update with baseurl

describe('Go Projects Page Test', function() {
  it('Open projects from resume', () => {
    cy.viewport(1400, 900)
    cy.visit('www.lastdragons.io')
    cy.log("STARTS")
    var genArr = Array.from({length:50000},(v,k)=>k+1)
    cy.wrap(genArr).each((index) => {
        cy.reload()
        cy.log("INDEX:" + index)
        cy.get('.container').then(($btn) => {
              // assert on the text
              if ($btn.text().includes('Stealth Launch - TBA')) {
                   cy.log("TRUE")
              } else {
                   cy.log("FALSE")
                   var beepsound = new Audio(
                   'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
                   beepsound.play();
                   cy.pause()
              }
      })

    })
    var beepsound = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
    beepsound.play();
  )
})