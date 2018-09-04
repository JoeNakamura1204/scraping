var casper = require("casper").create();


casper.start('https://entrepedia.jp/login');

casper.then(function () {
    this.evaluate(function(){
        this.fill('form#new_user',{
            'input#user_email':"f.ochiai@cloud-capital.co.jp",
            'input#user_password':"yhlCVXjx"
        },true);
    })
});

casper.then(function () {
    casper.capture("login.png");
});
casper.run();
