var VotePage = require('../page-objects/vote_page') // Update to your page object
var LoginPage = require('../page-objects/login_page')

describe('Voting Tests', function () {
    var votePage
    var loginpage

    beforeEach(function () {
        votePage= new VotePage()
        loginpage = new LoginPage()
        browser.ignoreSynchronization = true

        browser.get('file:///C:/protractor/superhero/index.html')
      
    })

    afterEach(function () {





    })

    it('should display all the elements of Vote page', function () {
       

        loginpage.emailFld.sendKeys('test@test.com')
        loginpage.passwordFld.sendKeys('hello')
        loginpage.submitBtn.click()

        expect(votePage.votetitleText.isDisplayed()).toBe(true)
        expect(votePage.votetitleText.getText()).toEqual('Vote for your favorite Superhero movie')

        expect(votePage.xmenChoice.isDisplayed()).toBe(true)
        expect(votePage.xmenChoice.getText()).toEqual('X-Men')

        expect(votePage.avengersChoice.isDisplayed()).toBe(true)
        expect(votePage.avengersChoice.getText()).toEqual('Avengers')

        expect(votePage.deadpoolChoice.isDisplayed()).toBe(true)
        expect(votePage.deadpoolChoice.getText()).toEqual('Deadpool')

        expect(votePage.spidermanChoice.isDisplayed()).toBe(true)
        expect(votePage.spidermanChoice.getText()).toEqual('Spider-Man Homecoming')

        expect(votePage.ironmanChoice.isDisplayed()).toBe(true)
        expect(votePage.ironmanChoice.getText()).toEqual('Iron Man')

        expect(votePage.submitbtn.isDisplayed()).toBe(true)
        expect(votePage.submitbtn.getText()).toEqual('Submit')

        expect(votePage.movieLbl.isDisplayed()).toBe(true)
        expect(votePage.movieLbl.getText()).toEqual('Movie')

        expect(votePage.voteLbl.isDisplayed()).toBe(true)
        expect(votePage.voteLbl.getText()).toEqual('Votes')

        expect(votePage.xmenLbl.isDisplayed()).toBe(true)
        expect(votePage.xmenLbl.getText()).toEqual('X-Men')

        expect(votePage.xmenVal.isDisplayed()).toBe(true)
        expect(votePage.xmenVal.getText()).toEqual('10')

        expect(votePage.avengersLbl.isDisplayed()).toBe(true)
        expect(votePage.avengersLbl.getText()).toEqual('Avengers')

        expect(votePage.avengersVal.isDisplayed()).toBe(true)
        expect(votePage.avengersVal.getText()).toEqual('5')

        expect(votePage.deadpoolLbl.isDisplayed()).toBe(true)
        expect(votePage.deadpoolLbl.getText()).toEqual('Deadpool')

        expect(votePage.deadpoolVal.isDisplayed()).toBe(true)
        expect(votePage.deadpoolVal.getText()).toEqual('22')

        expect(votePage.spidermanLbl.isDisplayed()).toBe(true)
        expect(votePage.spidermanLbl.getText()).toEqual('Spider-Man Homecoming')

        expect(votePage.spidermanVal.isDisplayed()).toBe(true)
        expect(votePage.spidermanVal.getText()).toEqual('12')

        expect(votePage.ironmanlLbl.isDisplayed()).toBe(true)
        expect(votePage.ironmanlLbl.getText()).toEqual('Iron Man')

        expect(votePage.ironmanVal.isDisplayed()).toBe(true)
        expect(votePage.ironmanVal.getText()).toEqual('1')
    })

    it('should add 1 vote to X-Men', function () {

        loginpage.emailFld.sendKeys('test@test.com')
        loginpage.passwordFld.sendKeys('hello')
        loginpage.submitBtn.click()

        votePage.submitbtn.click()
        expect(votePage.xmenVal.getText()).toEqual('11')
        expect(votePage.alertMsg.getText()).toEqual('Thanks for Voting!!')
        expect(votePage.alertMsg.isDisplayed()).toBe(true)
        expect(element(by.id('vote-form')).isDisplayed()).toBe(false)

    })
    it('should add 1 vote to Avengers', function () {

        loginpage.emailFld.sendKeys('test@test.com')
        loginpage.passwordFld.sendKeys('hello')
        loginpage.submitBtn.click()
        browser.sleep(2000)

        votePage.avengersrad.click()
        votePage.submitbtn.click()
        expect(votePage.avengersVal.getText()).toEqual('6')
        expect(votePage.alertMsg.getText()).toEqual('Thanks for Voting!!')
        expect(votePage.alertMsg.isDisplayed()).toBe(true)



    })
    it('should add 1 vote to DeadPool', function () {

        loginpage.emailFld.sendKeys('test@test.com')
        loginpage.passwordFld.sendKeys('hello')
        loginpage.submitBtn.click()
        browser.sleep(2000)

        votePage.deadpoolrad.click()
        votePage.submitbtn.click()
        expect(votePage.deadpoolVal.getText()).toEqual('23')
        expect(votePage.alertMsg.getText()).toEqual('Thanks for Voting!!')
        expect(votePage.alertMsg.isDisplayed()).toBe(true)


    })
    it('should add 1 vote to SpiderMan', function () {

        loginpage.emailFld.sendKeys('test@test.com')
        loginpage.passwordFld.sendKeys('hello')
        loginpage.submitBtn.click()
        browser.sleep(2000)

        votePage.spidermanrad.click()
        votePage.submitbtn.click()
        expect(votePage.spidermanVal.getText()).toEqual('13')
        expect(votePage.alertMsg.getText()).toEqual('Thanks for Voting!!')
        expect(votePage.alertMsg.isDisplayed()).toBe(true)


    })
    it('should add 1 vote to Iron-Man', function () {

        loginpage.emailFld.sendKeys('test@test.com')
        loginpage.passwordFld.sendKeys('hello')
        loginpage.submitBtn.click()
        browser.sleep(2000)

        votePage.ironmanrad.click()
        votePage.submitbtn.click()
        expect(votePage.ironmanVal.getText()).toEqual('2')
        expect(votePage.alertMsg.getText()).toEqual('Thanks for Voting!!')
        expect(votePage.alertMsg.isDisplayed()).toBe(true)


    })

})