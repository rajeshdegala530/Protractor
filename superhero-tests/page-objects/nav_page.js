var NavPage = function(){}

NavPage.prototype=Object.create({},{

    homeLink: {get :function(){return element(by.css('#navbarSupportedContent > ul > li.nav-item.active > a'))}},
    herofactsLink: {get :function(){return element(by.linkText('Hero Facts'))}},
    logoutLink: {get :function(){return element(by.linkText('Logout'))}},
    wolverineOption: {get: function () { return element(by.linkText('Wolverine')) } },
    spidermanOption: {get: function () { return element(by.linkText('Spider-Man')) } },

    //wolverine Model

    wolverineModelLabel: {get: function () { return element(by.id('wolverinemodaltitle')) } },
    wolverineModeltxt: {get: function () { return element(by.css('#exampleModal1 > div > div > div.modal-body')) } },
    wolverineModelClosebtn: {get: function () { return element(by.css('#exampleModal1 > div > div > div.modal-footer > button')) } },
    wolverineModelCloseX: {get: function () { return element(by.css('#exampleModal1 > div > div > div.modal-header > button > span')) } },

    //SpiderMan Model
    spidermanModelLabel: {get: function () { return element(by.id('spidermanmodaltitle')) } },
    spidermanModeltxt: {get: function () { return element(by.css('#exampleModal2 > div > div > div.modal-body')) } },
    spidermanModelClosebtn: {get: function () { return element(by.css('#exampleModal2 > div > div > div.modal-footer > button')) } },
    spidermanModelCloseX: {get: function () { return element(by.css('#exampleModal2 > div > div > div.modal-header > button > span')) } },


    searchFld: {get: function () { return element(by.id('search-box')) } },
    searchBtn: {get: function () { return element(by.buttonText('Search')) } }


})

module.exports = NavPage