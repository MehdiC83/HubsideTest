class PageLogin{

    visitHomePage()
    {

        cy.visit(Cypress.config('url'))
    }

    clickConnexion()
    {
        cy.get('[data-qa="linkto-login"]').click()
    }

    fillEmail(email)
    {
        cy.get('[data-qa="input_email"]').type(email)
        return this
    }

    clickSuivant()
    {
        cy.get('[data-qa="login_btn-next"]').click()
    }

    fillPassword(password)
    {
        cy.get('[data-qa="input_pwd"]').type(password)
        return this
    }

    clickConnect()
    {
        cy.get('[data-qa="register_btn-submit"]').click()
    }

}

export default PageLogin