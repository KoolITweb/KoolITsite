//make url a variable to be able to test against localhost and against live version


describe('Go Projects Page Test', function() {
  it('Open projects from resume', () => {
    cy.viewport(1400, 900)
    cy.visit('localhost:8001')

    //click on menu option based on text
    cy.contains('Resume').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/resume')

    // Scroll down to get TNT logo into view
    cy.get('#Resume-tnt').scrollIntoView()
      .should('be.visible')

    // Go to projects via projects button on TNT page
    cy.get('#resume_project_button')
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

  }),

  it('Should be able to open and close all projects', () => {
    //Open all projects cards and check if gallery shows
    cy.viewport(1400, 900)
    cy
      .get('.projects-grid .Card-button').should('have.length', 8)
      .each(($proj) => {
        cy.get($proj)
         .click()
        cy.get('.Gallery').should('have.class', 'Gallery--active')
        cy.get('.Gallery--active').click('right')
      })
  }),

  it('Activates mobile view', () => {

    //Navigation menu exists on desktop viewport
    cy.viewport(1400, 900)
    cy.get('.navigation-menus')
      .should('be.visible')

     //Set mobile viewport
    cy.viewport(650, 400)


    //Navigate via hamburger menu
    cy.get('.mdl-layout__drawer-button')
      .click()

    //Menu shows up
    cy.get('.mdl-navigation .mdl-navigation__link')
      .should('be.visible')

    //click on menu option based on text
    cy.contains('PPC')
      .click({force: true})

    //ppc page has opened
    cy.url().should('include', '/ppc')

    //Activate ppc page, close menu
    cy.get('.mdl-layout__obfuscator')
      .should('be.visible')
      .click('right', {force: true})
  })

})


describe('PPC page functionality tests', function() {
  it('Can play slidedeck', () => {
    cy.viewport(1400, 900)
    cy.visit('localhost:8001/ppc')

    //Slides are present
    cy.get('.ppcPage .gallery-img-container').scrollIntoView()
        .should('be.visible')

    //Can click previous and next slide via arrows
    cy.get('.ppcPage .gallery-img-container h2').should('have.text', 'What do you do to create a successful product?')

    cy.get('.next-carousel-button')
      .click()

    cy.get('.ppcPage .gallery-img-container h2').should('have.text', 'Plotting practices to the quality pyramid')

    cy.get('.prev-carousel-button')
      .click()

    cy.get('.ppcPage .gallery-img-container h2').should('have.text', 'What do you do to create a successful product?')

    //Can click previous and next slide via slide dots
    cy.get('#carousel-dot-container #1').scrollIntoView()
        .click()

    cy.get('.ppcPage .gallery-img-container h2').should('have.text', 'Plotting practices to the quality pyramid')

    //Can click previous and next slide via slide previews
    cy.get('#slider-img-container #2').scrollIntoView()
      .click()

    cy.get('.ppcPage .gallery-img-container h2').should('have.text', 'Explain the product practices canvas')

    //Check slidedeck autoplay
    cy.get('#carousel-dot-container #0').scrollIntoView()
        .click()

    cy.get('.slideshow-button').click()

    cy
      .get('#slider-img-container img').should('have.length', 11)
      .each(($img) => {
        return cy.get($img).should('have.class', 'active')
      })
      .then(()=> {
        cy.get('.slideshow-button').click()
      })
  }),

  it('Slidedeck functionality on mobile', () => {

    //fullscreen options exists for desktop
    cy.viewport(1400, 900)
    cy.get('.fullscreen-button')
      .should('be.visible')

   //Full screen option is not available for mobile
    cy.viewport(650, 400)
    cy.reload()
    cy.get('.fullscreen-button')
      .should('be.hidden')

    //Can click previous and next slide via arrows
    cy.get('.ppcPage .gallery-img-container h2').should('have.text', 'What do you do to create a successful product?')

    cy.get('.next-carousel-button')
      .click()

    cy.get('.ppcPage .gallery-img-container h2').should('have.text', 'Plotting practices to the quality pyramid')

    cy.get('.prev-carousel-button')
      .click()

    cy.get('.ppcPage .gallery-img-container h2').should('have.text', 'What do you do to create a successful product?')

    //Can click previous and next slide via slide dots
    cy.get('#carousel-dot-container #1').scrollIntoView()
        .click()

    cy.get('.ppcPage .gallery-img-container h2').should('have.text', 'Plotting practices to the quality pyramid')

    //Can click previous and next slide via slide previews
    cy.get('#slider-img-container #2').scrollIntoView()
      .click()

    cy.get('.ppcPage .gallery-img-container h2').should('have.text', 'Explain the product practices canvas')

    //Check slidedeck autoplay
    cy.get('#carousel-dot-container #0').scrollIntoView()
        .click()

    cy.get('.slideshow-button').click()

    cy
      .get('#slider-img-container img').should('have.length', 11)
      .each(($img) => {
        return cy.get($img).should('have.class', 'active')
      })
      .then(()=> {
        cy.get('.slideshow-button').click()
      })
  })
})



describe('Information on about me displays on hover', function() {
  it('Hover on aboutMe page', () => {
    cy.viewport(1400, 900)
    cy.visit('localhost:8001/aboutme')


    // Hover over any of the pictures to see text appears
    cy.get('#aboutPage .aboutme').should('have.length', 6)
      .each(($aboutme) => {
        cy.get($aboutme).trigger('mouseover')
        cy.get('.aboutme i p').should('be.visible')
      })
  })
})


describe('Contact info is correct', function() {
  it('Open projects from resume', () => {
    cy.viewport(1400, 900)
    cy.visit('localhost:8001/contactme')

    //click on menu option based on text
    cy.contains('Resume').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/resume')
//
//    // Scroll down to get TNT logo into view
      cy.get('#Resume-tnt').scrollIntoView()
        .should('be.visible')
//    // Go to projects via projects button on TNT page

      cy.get('#resume_project_button')
        .click()
//
      cy.url().should('include', '/projects')
//
//    //check amount of projects is at least 6
      cy.get('.projects-grid').find('.Card').its('length').should('be.gte', 6)
//
//    //Or to be able to do something with the amount of projects found
      cy.get('.projects-grid')
        .find('.Card')
        .then(projects => {
          const projectsCount = Cypress.$(projects).length;
          expect(projectsCount).to.be.at.least(6);
        });

  })
})