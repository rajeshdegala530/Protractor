var NavPage = require('../page-objects/nav_page') // Update to your page object
var LoginPage = require('../page-objects/login_page')
describe('Navigation Tests ', function () {
    var navPage
    var loginPage

    beforeEach(function () {
       
        navPage = new NavPage()
        loginPage= new LoginPage
        browser.ignoreSynchronization = true

        browser.get('file:///C:/protractor/superhero/index.html')
      
    })

    afterEach(function () {


    })

    it('should display all header elements', function () {

        loginPage.emailFld.sendKeys('test@test.com')
        loginPage.passwordFld.sendKeys('hello')
        loginPage.submitBtn.click()

        expect(navPage.homeLink.isDisplayed()).toBe(true)
        expect(navPage.homeLink.getText()).toEqual('Home')

        expect(navPage.herofactsLink.isDisplayed()).toBe(true)
        expect(navPage.herofactsLink.getText()).toEqual('Hero Facts')
        navPage.herofactsLink.click()

        expect(navPage.wolverineOption.isDisplayed()).toBe(true)
        expect(navPage.wolverineOption.getText()).toEqual('Wolverine')
        expect(navPage.spidermanOption.isDisplayed()).toBe(true)
        expect(navPage.spidermanOption.getText()).toEqual('Spider-Man')

       
    })

    it('should display Wolverine Model and Close', function () {

        loginPage.emailFld.sendKeys('test@test.com')
        loginPage.passwordFld.sendKeys('hello')
        loginPage.submitBtn.click()

        navPage.herofactsLink.click()
        navPage.wolverineOption.click()
        browser.sleep(1000)

        expect(navPage.wolverineModelLabel.isPresent()).toBeTruthy()
        expect(navPage.wolverineModelLabel.getText()).toEqual('Wolverine Facts')

        expect(navPage.wolverineModeltxt.isPresent()).toBeTruthy()
        expect(navPage.wolverineModeltxt.getText()).toEqual('Wolverine made his first comic book appearance in 1974.')

        expect(navPage.wolverineModelClosebtn.isPresent()).toBeTruthy()
        expect(navPage.wolverineModelClosebtn.getText()).toEqual('Close')

        expect(navPage.wolverineModelCloseX.isPresent()).toBeTruthy()
        expect(navPage.wolverineModelCloseX.getText()).toEqual('×')
       // expect(navPage.wolverineModeltxt.isDisplayed()).toBe(true)
      //  expect(navPage.wolverineModeltxt.getText()).toEqual('WolWolverine made his first comic book appearance in 1974.')




       
    })

    it('should display SpiderMan Model and Close', function () {

        loginPage.emailFld.sendKeys('test@test.com')
        loginPage.passwordFld.sendKeys('hello')
        loginPage.submitBtn.click()

        navPage.herofactsLink.click()
        navPage.spidermanOption.click()
        browser.sleep(1000)

        expect(navPage.spidermanModelLabel.isPresent()).toBeTruthy()
        expect(navPage.spidermanModelLabel.getText()).toEqual('Spider-Man Facts')

        expect(navPage.spidermanModeltxt.isPresent()).toBeTruthy()
        expect(navPage.spidermanModeltxt.getText()).toEqual('Spider-Man first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books.')

        expect(navPage.spidermanModelClosebtn.isPresent()).toBeTruthy()
        expect(navPage.spidermanModelClosebtn.getText()).toEqual('Close')

        expect(navPage.spidermanModelCloseX.isPresent()).toBeTruthy()
        expect(navPage.spidermanModelCloseX.getText()).toEqual('×')

       // expect(navPage.wolverineModeltxt.isDisplayed()).toBe(true)
      //  expect(navPage.wolverineModeltxt.getText()).toEqual('WolWolverine made his first comic book appearance in 1974.')




       
    })
    
    it('should close the model by Close button', function () {

        loginPage.emailFld.sendKeys('test@test.com')
        loginPage.passwordFld.sendKeys('hello')
        loginPage.submitBtn.click()

        navPage.herofactsLink.click()
        navPage.wolverineOption.click()
        browser.sleep(1000)
        navPage.wolverineModelClosebtn.click()

    
       // expect(navPage.wolverineModeltxt.isDisplayed()).toBe(true)
      //  expect(navPage.wolverineModeltxt.getText()).toEqual('WolWolverine made his first comic book appearance in 1974.')




       
    })
    
    it('should display SpiderMan Model and Close', function () {

        loginPage.emailFld.sendKeys('test@test.com')
        loginPage.passwordFld.sendKeys('hello')
        loginPage.submitBtn.click()

        navPage.herofactsLink.click()
        navPage.spidermanOption.click()
        browser.sleep(1000)
        navPage.spidermanModelClosebtn.click()

              
       // expect(navPage.wolverineModeltxt.isDisplayed()).toBe(true)
      //  expect(navPage.wolverineModeltxt.getText()).toEqual('WolWolverine made his first comic book appearance in 1974.')




       
    })
    
    it('should display SpiderMan Model and Close', function () {

        loginPage.emailFld.sendKeys('test@test.com')
        loginPage.passwordFld.sendKeys('hello')
        loginPage.submitBtn.click()

        navPage.herofactsLink.click()
        navPage.wolverineOption.click()
        browser.sleep(1000)
        navPage.wolverineModelCloseX.click()

       
       // expect(navPage.wolverineModeltxt.isDisplayed()).toBe(true)
      //  expect(navPage.wolverineModeltxt.getText()).toEqual('WolWolverine made his first comic book appearance in 1974.')




       
    })
    
    it('should display SpiderMan Model and Close', function () {

        loginPage.emailFld.sendKeys('test@test.com')
        loginPage.passwordFld.sendKeys('hello')
        loginPage.submitBtn.click()

     
        navPage.herofactsLink.click()
        navPage.spidermanOption.click()
        browser.sleep(1000)
        navPage.spidermanModelCloseX.click()

        
       // expect(navPage.wolverineModeltxt.isDisplayed()).toBe(true)
      //  expect(navPage.wolverineModeltxt.getText()).toEqual('WolWolverine made his first comic book appearance in 1974.')




       
    })

    it('should display without a email and password', function () {

        loginPage.emailFld.sendKeys('test@test.com')
        loginPage.passwordFld.sendKeys('hello')
        loginPage.submitBtn.click()

     
        navPage.logoutLink.click()
        expect(loginPage.emailFld.getText()).toEqual('')
        expect(loginPage.passwordFld.getText()).toEqual('')
      
    })

    it('should display with a email and password', function () {

        loginPage.emailFld.sendKeys('test@test.com')
        loginPage.passwordFld.sendKeys('hello')
        loginPage.rememberChk.click()
        browser.sleep(3000)
        loginPage.submitBtn.click()

        browser.sleep(1000)
        navPage.logoutLink.click()
        browser.sleep(3000)
        expect(loginPage.emailFld.getAttribute('value')).toEqual('test@test.com')
        expect(loginPage.passwordFld.getAttribute('value')).toEqual('hello')   
      
    })

    it('should display success alert with invalid search', function () {

        loginPage.emailFld.sendKeys('test@test.com')
        loginPage.passwordFld.sendKeys('hello')
        browser.sleep(3000)
        loginPage.submitBtn.click()
        browser.sleep(1000)

        navPage.searchFld.sendKeys('rajesh')
        navPage.searchBtn.click()
        browser.sleep(2000)

        var EC = protractor.ExpectedConditions
        browser.wait(EC.alertIsPresent(), 3000)

        expect(browser.switchTo().alert().getText()).toEqual('Your search for rajesh returned 0 results. Try something else.')
        browser.switchTo().alert().accept()
       
        
      
    })

    it('should display success alert with valid search', function () {

        loginPage.emailFld.sendKeys('test@test.com')
        loginPage.passwordFld.sendKeys('hello')
        browser.sleep(3000)
        loginPage.submitBtn.click()
        browser.sleep(1000)

        navPage.searchFld.sendKeys('wolverine')
        navPage.searchBtn.click()
        browser.sleep(2000)

        var EC = protractor.ExpectedConditions
        browser.wait(EC.alertIsPresent(), 3000)

        expect(browser.switchTo().alert().getText()).toEqual('Wolverine is awesome')
        browser.switchTo().alert().accept()
      
    })



})