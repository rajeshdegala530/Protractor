var RosterPage = require('../page-objects/roster_page')
var LoginPage = require('../page-objects/login_page') // Update to your page object
describe('Add Hero Page ', function () {
    var rosterPage
    var loginPage

    beforeEach(function () {
       
        rosterPage = new RosterPage()
        loginPage = new LoginPage()
        browser.ignoreSynchronization = true

        browser.get('file:///C:/protractor/superhero/index.html')
      
    })

    afterEach(function () {


    })

    it('should display all Roster Page Elements', function () 
    {
      
        loginPage.emailFld.sendKeys('test@test.com')
        loginPage.passwordFld.sendKeys('hello')
        loginPage.submitBtn.click()


        expect(rosterPage.rosterTitleTxt.isDisplayed()).toBe(true)
        expect(rosterPage.rosterTitleTxt.getText()).toEqual('Build your superhero Roster')


        expect(rosterPage.wolverineTxt.isDisplayed()).toBe(true)
        expect(rosterPage.wolverineTxt.getText()).toEqual('Wolverine')

        expect(rosterPage.spidermanTxt.isDisplayed()).toBe(true)
        expect(rosterPage.spidermanTxt.getText()).toEqual('spider-Man')

        expect(rosterPage.deadpoolTxt.isDisplayed()).toBe(true)
        expect(rosterPage.deadpoolTxt.getText()).toEqual('Dead Dead')

        expect(rosterPage.ironManTxt.isDisplayed()).toBe(true)
        expect(rosterPage.ironManTxt.getText()).toEqual('Iron Man')

        expect(rosterPage.thorTxt.isDisplayed()).toBe(true)
        expect(rosterPage.thorTxt.getText()).toEqual('Thor')

        expect(rosterPage.addheroTxt.isDisplayed()).toBe(true)
        expect(rosterPage.addheroTxt.getText()).toEqual('Add A Super Hero')

        expect(rosterPage.addheroFld.isDisplayed()).toBe(true)
        expect(rosterPage.addheroFld.getText()).toEqual('')

        expect(rosterPage.submitBtn.isDisplayed()).toBe(true)
      
    })

    it('should add hero on submit', function () {

        loginPage.emailFld.sendKeys('test@test.com')
        loginPage.passwordFld.sendKeys('hello')
        loginPage.submitBtn.click()

        rosterPage.addheroFld.sendKeys('rajesh')
        rosterPage.submitBtn.click()
        browser.sleep(5000)

        

        expect(element(by.css('#hero-list > li:nth-child(6)')).isDisplayed()).toBe(true)
        expect(element(by.css('#hero-list > li:nth-child(6)')).getText()).toEqual('rajesh')

      

        
      
     //   rosterPage.addheroBtn.click()

    })
   
   
 
})