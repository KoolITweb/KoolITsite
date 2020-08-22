//make url a variable to be able to test against localhost and against live version


describe('My First Test', function() {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://koolit.nl')

    //click on menu option based on text
    cy.contains('Resume').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/resume')

    // Scroll down to get TNT logo into view

    // Go to projects via projects button on TNT page
    cy.get('.mdl-button__ripple-container')[5]
      .click()

    cy.url().should('include', '/projects')

    //check amount of projects is at least 6
    cy.get('.projects-grid').find('.Card').its('length').should('be.gte', 6)

    //Or to be able to do something with the amount of projects found
    cy.get('.projects-grid')
      .find('.Card')
      .then(projects => {
        const projectsCount = Cypress.$(projects).length;
        expect(projectsCount).to.be.at.least(6);
      });

  })
})


//Test resizing page to check change in element, header change

//Check ppc slidedeck can be slided via button, dot and picture

//Check ppc slidedeck can be played automatically

//Check hover on about me images provides information/text

//Check contact page contains right email and contains the floating cabbage

//Open and close each project on the projects page