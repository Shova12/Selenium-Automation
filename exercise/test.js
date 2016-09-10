
'use strict';
 

var WebDriver = require('selenium-webdriver');
var driver = new WebDriver.Builder().withCapabilities(
    WebDriver.Capabilities.firefox()
).build();
/*driver.get('http://www.google.com/ncr');*/

driver.get('http://www.google.com/ncr').then(function(){
	driver.findElement({name: 'q'}).then(function(input){
		input.sendKeys('codechewing');
		input.sendKeys(WebDriver.Key.ENTER);
	});
});

driver.findElement(WebDriver.By.name('q'))
driver.sleep(1000);

driver.get('http://www.google.com/ncr').then(function(){
	driver.findElement({name: 'q'}).then(function(input){
		input.clear();
		input.clear(WebDriver.Key.ENTER);
	});
});

/*var elem = driver.findElement(WebDriver.By.id('ires'));
var link = elem.findElement(WebDriver.By.css.('ol li h3 a'));*/

/*link.getText().then (function(text){
	var pageTitle = 'Code Chewing -HTML, PHP, CSS, Javascript tips';
	console.log('codechewing.com is the top result?');
	console.log(text.indexOf(pageTitle) !== -1);

});*/

driver.quit();






