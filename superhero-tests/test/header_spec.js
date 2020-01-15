var HeaderPage = require('../page-objects/header_page')
var LoginPage = require('../page-objects/login_page')

describe('Header Tests', function () {
    var headerPage
    var loginPage

    beforeEach(function () {
        headerPage = new HeaderPage()
        loginPage = new LoginPage()

        browser.ignoreSynchronization = true

    browser.get('file:///C:/protractor/superhero/index.html')

    })

    afterEach(function(){

    })

    it('should display all the elements of header section',function(){

        loginPage.emailFld.sendKeys('test@test.com')
        loginPage.passwordFld.sendKeys('hello')
        loginPage.submitBtn.click()
        browser.sleep(2000)

        expect(headerPage.headerTitle.isDisplayed()).toBe(true)
        expect(headerPage.headerTitle.getText()).toEqual('Superhero Roster')

       // expect(headerPage.headerImg.isDisplayed()).toBe(true)

        expect(headerPage.headerTxt.isDisplayed()).toBe(true)
        expect(headerPage.headerTxt.getText()).toEqual('Imagine that you are tasked with building a team of superheros to save the world. We have given you a few heros to start with. Add as many as heros as you would like to round out your dream team')


    })
})