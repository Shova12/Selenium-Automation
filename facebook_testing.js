var assert =  require('chai').assert,
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');

/*test.describe('Facebook',function(){
	test.it('should type email',function(){
		var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).
		build();

		driver.get('http://www.facebook.com');
		var inputBox = driver.findElement(webdriver.By.id('email'));
		inputBox.sendKeys('tester@yahoo.com');
		/*inputBox.getText().then(function(value){
			assert.equal(value,'tester@yahoo.com');

			driver.quit();
		});

	});

	test.it('should type password',function(){
		var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).
		build();

		driver.get('http://www.facebook.com');
		var inputBox = driver.findElement(webdriver.By.id('pass'));
		inputBox.sendKeys('tester@yahoo.com');
		inputBox.getAttribute('value').then(function(value){
			assert.equal(value,'');

			driver.quit();
		});

	});


	test.it('click',function(){
		var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).
		build();

		driver.get('http://www.facebook.com');
		var action = driver.findElement(webdriver.By.id('u_0_l'));
		action.click();
		//inputBox.getAttribute('value').then(function(value){
			//assert.equal(value,'');

			driver.quit();
		//});

	});

});	*/

test.describe('Facebook',function(){
	test.it('should get tag',function(){
		var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).
		build();

		driver.get('http://www.facebook.com');
		var tagName=  driver.findElement(webdriver.By.id('email')).getTagName();
		console.log(tagName);
		driver.quit();
				
	});

	test.it('check persist',function(){
		var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox)).
		build();

		driver.get('http://www.facebook.com');
		var chkFBPersist =  driver.findElement(webdriver.By.id('persist_box'));
		var chkFBPersist = true;
		assert.isTrue(chkFBPersist, 'check marked on box');
		driver.quit();
				
	});
});	

