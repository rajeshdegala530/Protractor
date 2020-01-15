var VotePage = function(){}

VotePage.prototype = Object.create({},

    {
        votetitleText: {get:function(){return element(by.css('body > div.container-fluid > div:nth-child(6) > div > h4'))}},
        xmenChoice: {get:function(){return element(by.css('#vote-form > div:nth-child(1) > label'))}},
        avengersChoice: {get:function(){ return element(by.css('#vote-form > div:nth-child(2) > label'))}},
        deadpoolChoice: {get:function(){ return element(by.css('#vote-form > div:nth-child(3) > label'))}},
        spidermanChoice: {get:function(){ return element(by.css('#vote-form > div:nth-child(4) > label'))}},
        ironmanChoice: {get:function(){ return element(by.css('#vote-form > div:nth-child(5) > label'))}},
        submitbtn: {get:function(){ return element(by.css('#vote-form > button'))}},

        xmenrad: {get:function(){return element(by.id('heroMovieRadio1'))}},
        avengersrad: {get:function(){ return element(by.id('heroMovieRadio2'))}},
        deadpoolrad: {get:function(){ return element(by.id('heroMovieRadio3'))}},
        spidermanrad: {get:function(){ return element(by.id('heroMovieRadio4'))}},
        ironmanrad: {get:function(){ return element(by.id('heroMovieRadio5'))}},


        
        movieLbl: {get:function(){ return element(by.css('body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(1)'))}},
        voteLbl: {get:function(){ return element(by.css('body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(2)'))}},
        xmenLbl: {get:function(){ return element(by.css('#movieName1'))}},
        xmenVal: {get:function(){ return element(by.css('#movieVotes1'))}},
        avengersLbl: {get:function(){ return element(by.css('#movieName2'))}},
        avengersVal: {get:function(){ return element(by.css('#movieVotes2'))}},
        deadpoolLbl: {get:function(){ return element(by.css('#movieName3'))}},
        deadpoolVal: {get:function(){ return element(by.css('#movieVotes3'))}},
        spidermanLbl: {get:function(){ return element(by.css('#movieName4'))}},
        spidermanVal: {get:function(){ return element(by.css('#movieVotes4'))}},
        ironmanlLbl: {get:function(){ return element(by.css('#movieName5'))}},
        ironmanVal: {get:function(){ return element(by.css('#movieVotes5'))}},
        alertMsg: {get:function(){ return element(by.css('#vote-alert'))}}

        

        })

        module.exports = VotePage


    


