var TestPage = require('../page-objects/test.page')

describe('Super Hero Page', function () {    
    var testpage

    //Before each test case - do something
    beforeEach(function () {
        testpage = new TestPage()
        browser.ignoreSynchronization = true
        browser.get('file:///C:/protractor/superhero/index.html')
    })
    //After each test case - do something
    afterEach(function () {


    })

    it('should load the correct URL', function () 
    {
       //Enter the login details 
        testpage.emailFld.sendKeys("hello")
        testpage.passwordFld.sendKeys("password")


        //Validate the input
        expect(testpage.loginTitleText.getText('login-title')).toEqual('Welcome.Please enter your Login')
        expect(testpage.emailFld.getAttribute('value')).toEqual('hello')
        expect(testpage.passwordFld.getAttribute('value')).toEqual('password')

        browser.sleep(1000)
    })

})