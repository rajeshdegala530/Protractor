var RosterPage = function(){}

    RosterPage.prototype= Object.create({},
        { 
            rosterTitleTxt: {get: function(){return element(by.css('body > div.container-fluid > div:nth-child(4) > h3'))}},
            wolverineTxt: {get: function(){return element(by.css('#hero-list > li:nth-child(1)'))}},
            spidermanTxt: {get: function(){return element(by.css('#hero-list > li:nth-child(2)'))}},
            deadpoolTxt: {get: function(){return element(by.css('#hero-list > li:nth-child(3)'))}},
            ironManTxt: {get: function(){return element(by.css('#hero-list > li:nth-child(4)'))}},
            thorTxt: {get: function(){return element(by.css('#hero-list > li:nth-child(5)'))}},
           // newrowTxt:{get: function(){return element(by.css('#hero-list > li:nth-child(6)'))}},

            addheroTxt: {get: function(){return element(by.css('#addhero-form > div > label'))}},
            addheroFld: {get: function(){return element(by.id('heroInput'))}},
            submitBtn: {get: function(){return element(by.css('#addhero-form > button'))}},
           // sample:{get: function(){return element(by.id(''))}},
         //   sample:{get: function(){return element(by.id(''))}},
         //   sample:{get: function(){return Element(by.id(''))}},
            


        })


        

        module.exports = RosterPage

       