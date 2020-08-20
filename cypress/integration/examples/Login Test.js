describe('Noon Tests', function() {
  // Verification that specific error messages are not displayed, for invalid username and password.
    it('Login credentials message display check', function() {
      // Visit Noon website
      cy.visit('https://www.noon.com/uae-en/')
      // Click on sign in header
      cy.get ('#dd_header_signInOrUp').click()
      // Select the sign in button to navigate to sign in page 
      cy.get ('#btn_header_signin').click()
      // Type the email of the user account in Noon
      cy.get ('#tf_signin_email').type('Ifzm.test@gmail.com')
      // Type the password of the user account in Noon application
      cy.get ('#tf_signin_password').type('noon.test')
      // Click on the Sign in button
      cy.get ('#btn_signin_signin').click()
      
    })
  })

  describe('Noon Tests123', function() {
    // Verification that specific error messages are not displayed, for invalid username and password.
      it('Login credentials message display check', function() {
        // Visit Noon website
        cy.visit('https://www.noon.com/uae-en/')
        // Click on sign in header
        cy.get ('#dd_header_signInOrUp').click()
        // Select the sign in button to navigate to sign in page 
        cy.get ('#btn_header_signin').click()
        // Type the email of the user account in Noon
        cy.get ('#tf_signin_email').type('Ifzm.test@gmail.com')
        // Type the password of the user account in Noon application
        cy.get ('#tf_signin_password').type('noon.test')
        // Click on the Sign in button
        cy.get ('#btn_signin_signin').click()
        
      })
    })