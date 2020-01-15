// Login Page Objects

var LoginPage =function(){}

LoginPage.prototype = Object.create({},{

    loginTitleTxt: {get :function(){return element(by.id('login-title'))}},
    emailFldLbl: {get :function(){return element(by.css('#form-login > div:nth-child(1) > label'))}},
    emailFld: {get :function(){return element(by.id('loginemail'))}},
    passwordFldLbl: {get :function(){return element(by.css('#form-login > div:nth-child(2) > label'))}},
    passwordFld: {get :function(){return element(by.id('loginpassword'))}},
    rememberChkLbl: {get :function(){return element(by.css('#form-login > div.form-check > label'))}},
    rememberChk: {get :function(){return element(by.id('rememberme'))}},
    submitBtn: {get :function(){return element(by.id('login-submit'))}},
    loginErrMsg: {get :function(){return element(by.id('login-alert'))}},
    //loginPwdErrMsg: {get :function(){return element(by.id('nopassword'))}},
  //  loginEmailErrMsg: {get :function(){return element(by.id('noemail'))}}


  




   
})
module.exports = LoginPage