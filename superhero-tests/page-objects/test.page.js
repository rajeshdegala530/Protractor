var TestPage =function(){}

TestPage.prototype = Object.create({},{
    emailFld:{get:function(){return element(by.id('loginemail'))}},
    passwordFld:{get:function(){return element(by.id('loginpassword'))}},
    loginTitleText:{get:function(){return element(by.id('login-title'))}},
})
module.exports = TestPage
