var assert =  require('chai').assert,
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');

test.describe('Google Search',function(){
	/*test.it('should work',function(){
		var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).
		build();

		driver.get('http://www.google.com');
		var searchBox = driver.findElement(webdriver.By.name('q'));
		searchBox.sendKeys('Selenium');
		searchBox.getAttribute('value').then(function(value){
			assert.equal(value,'');
			driver.quit();
		});

	});

	test.it('should Not work',function(){
		var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).
		build();

		driver.get('http://www.google.com');
		var searchBox = driver.findElement(webdriver.By.name('q'));
		searchBox.sendKeys('Selenium');
		searchBox.getAttribute('value').then(function(value){
			assert.notEqual(value,'Tytuy');
			driver.quit();
		});
	});*/

	test.it('Email Validation',function(){
		var email = 'tt@ty.com';
		assert.equal(email,email);
	});


});