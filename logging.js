'use strict';

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

webdriver.logging.installConsoleHandler();
webdriver.logging.getLogger('webdriver.http')
    .setLevel(webdriver.logging.Level.ALL);
test.describe('Google with log', function() {	
	test.it('Welcome: Mercury Tours',function(){ 
		var driver = new webdriver.Builder()
		    .forBrowser('firefox')
		    .build();

		driver.get('http://www.google.com/ncr');

		var searchBox = driver.wait(until.elementLocated(By.name('q')), 3000);
		searchBox.sendKeys('webdriver');

		driver.findElement(By.name('btnG')).click();
		driver.wait(until.titleIs('webdriver - Google Search'), 1000);
		driver.quit();
	});
})
