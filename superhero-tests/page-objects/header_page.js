var HeaderPage = function(){}

HeaderPage.prototype=Object.create({},{

    headerTitle: {get :function(){return element(by.css('body > div.container-fluid > div:nth-child(1) > h1'))}},
    headerImg: {get :function(){return element(by.css('body > div.container-fluid > div.row.justify-content-md-center.bg-light > img'))}},
    headerTxt: {get :function(){return element(by.css('body > div.container-fluid > div:nth-child(3) > div > p'))}},

})

module.exports = HeaderPage