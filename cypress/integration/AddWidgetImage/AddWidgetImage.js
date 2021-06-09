import PageLogin from '../pageObjects/PageLogin'
import PageHome from '../pageObjects/PageHome'

const pl = new  PageLogin()
const ph = new PageHome()
const testData = require('../../fixtures/testData')

beforeEach( () => {
    //  keep session cookies
    Cypress.Cookies.preserveOnce('PHPSESSID')
})

Given ('I navigate to home page', ()=> {
    pl.visitHomePage()
})

When ('I click button connexion', ()=> {
    pl.clickConnexion()
})

And ('I enter', (datatable)=>{
    datatable.hashes().forEach(Element => {
        pl.fillEmail(Element.email)

    })
})

And ('I click buton suivant', ()=>{
        pl.clickSuivant()
        cy.wait(1000)
})

And ('I pass', (datatable)=>{
    datatable.hashes().forEach(Element => {
        pl.fillPassword(Element.password)

    })

})

And ('I click on button me connecter', ()=>{
    pl.clickConnect()

    // wait to enter captcha manually
    cy.wait(30000)
})

Then ('I am logged in', ()=>{
    ph.checkLoggedIn()
})

Given ('I am in my site page', ()=> {
    ph.checkHomePage(testData.welcomeMsg)
    })

And ('I click on button update site', ()=> {
    ph.clickUpdateButton()
    })

And ('I click on button add bloc', ()=> {
    ph.clickButtonAddBloc()
     })

And ('I click on button image', ()=> {
    ph.clickButtonImage()
    })

And ('I click on image', ()=> {
        ph.clickLionImage()
        cy.wait(3000)
     })

Then ('Image is loaded in site', ()=> {
    ph.checkImageLoaded()
})