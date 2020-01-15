// Test for Login Page

//Page Ojbect file
var LoginPage = require('../page-objects/login_page.js') // Update to your page object
describe('Login  Tests', function () {
    var loginpage

    beforeEach(function () {
        loginpage = new LoginPage()
        browser.ignoreSynchronization = true
        browser.get('file:///C:/protractor/superhero/index.html')//Update to your URL


    })

    afterEach(function () {


    })

    it('should display all login page elements', function () {
        // check Login page Welcome Text
        expect(loginpage.loginTitleTxt.isDisplayed()).toBe(true)
        expect(loginpage.loginTitleTxt.getText()).toEqual('Welcome.Please Hello  your Login')

        //Check Login email fields
        expect(loginpage.emailFldLbl.isDisplayed()).toBe(true)        
        expect(loginpage.emailFld.isDisplayed()).toBe(true)  
        expect(loginpage.emailFld.getText()).toEqual('')

        //Check Password Fields
        expect(loginpage.passwordFldLbl.isDisplayed()).toBe(true)
        expect(loginpage.passwordFld.isDisplayed()).toBe(true)        
        expect(loginpage.passwordFld.getText()).toEqual('')

        //Check remeber me fields
        expect(loginpage.rememberChkLbl.isDisplayed()).toBe(true)
        expect(loginpage.rememberChk.isDisplayed()).toBe(true)
        expect(loginpage.rememberChk.isSelected()).toBe(false)

        //Check Submit Fields
        expect(loginpage.submitBtn.isDisplayed()).toBe(true)
    })

    it('should display error message when no login and pwd entered', function ()
     {
            loginpage.submitBtn.click()

            expect(loginpage.loginErrMsg.isDisplayed()).toBe(true)
            expect(loginpage.loginErrMsg.getText()).toEqual('Email and Password are required.')
    })

    it('should display error message when no password entered', function ()
     {  
        loginpage.emailFld.sendKeys('test@test.com')

        loginpage.submitBtn.click()

        expect(loginpage.loginErrMsg.isDisplayed()).toBe(true)
        expect(loginpage.loginErrMsg.getText()).toEqual('Email and Password are required.')


    })

    it('should display error message when no user id entered', function () 
    {
        loginpage.passwordFld.sendKeys('hello')

        loginpage.submitBtn.click()

        expect(loginpage.loginErrMsg.isDisplayed()).toBe(true)
        expect(loginpage.loginErrMsg.getText()).toEqual('Email and Password are required.')


    })

    it('should log the user in', function ()

    {
        loginpage.emailFld.sendKeys('test@test.com')
        loginpage.passwordFld.sendKeys('hello')
        loginpage.submitBtn.click()

        // To check if new page is loaded

    })

browser.sleep(1000)


})
