class PageHome{

checkLoggedIn()
    {
        cy.contains('Modifier mon site').should('be.visible')
    }

checkHomePage(wlcMsg)
    {
        cy.get('.title-h1').contains(wlcMsg)
    }

    clickUpdateButton()
    {
        cy.get('[data-qa="link-editMySite"]').click()
    }

    clickButtonAddBloc()
    {
        cy.get('[data-qa="editable-controls-add"]').first().click()
    }

    clickButtonImage()
    {
        cy.get('[data-qa="add-widget-image"]').click()
    }

    clickLionImage()
    {
        cy.get('[data-qa="add-widget-confirm"]').first().click({ force: true })
    }

    checkImageLoaded()
    {
        cy.get('.AspectRatio_aspectRatioInner__YLtCh img').first().invoke('attr', 'src').should('eq', '/static/plugins/images/default/pictures/image/pictureT1.jpg')
    }

}

export default PageHome