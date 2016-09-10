'use strict';

var WebDriver = require('selenium-webdriver');
var driver = new WebDriver.Builder().withCapabilities(
	WebDriver.Capabilities.firefox()
	).build();

/*driver.get('http://facebook.com').then(function(){
	driver.findElement({id:'email'}).then (function(input){
	input.sendKeys('tester10@yahoo.com');
	});
	driver.findElement({id:'pass'}).then (function(input){
	input.sendKeys('abcd1234');
	input.sendKeys(WebDriver.Key.ENTER);
	});		
});*/

/*function logTitle(){
	driver.get().then(function(title){
		console.log('Current Page Title:'+ title);

	});
};*/

/*driver.findElement({linkText: 'Sign Up'}).then (function(input){
	input.click();
});*/

driver.get('http://facebook.com');
driver.findElement({id:'u_0_1'}).then(function(input){
	input.sendKeys('Tester');
});

driver.findElement({id: 'u_0_3'}).sendKeys('Prajapati');
driver.findElement({id: 'u_0_6'}).sendKeys('tester@yahoo.com');
driver.findElement({id: 'u_0_9'}).sendKeys('tester@yahoo.com');
driver.findElement({id: 'u_0_b'}).sendKeys('abcd1234');
/*if(driver.get()==('http://www.facebook.com/r.php')){
	console.log('We are in Sign up Page');
}
else{
	console.log('We are not in Sign up Page');
};*/



