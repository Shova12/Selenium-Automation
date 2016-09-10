var assert = require('chai').assert,//import chai
test = require('selenium-webdriver/testing'),
until = require('selenium-webdriver').until,
webdriver = require('selenium-webdriver'),
By = require('selenium-webdriver').By;

webdriver.logging.installConsoleHandler();
webdriver.logging.getLogger('webdriver.http')
    .setLevel(webdriver.logging.Level.ALL);

test.describe('FileConvey',function(){
	var driver;
	var url = "http://www.fileconvoy.com/";
	var fileurl = "C:\\Users\\ksprajapati\\Documents\\UserTesting\\launched.lck"

	test.before(function(){
		driver = new webdriver.Builder()
		.forBrowser('firefox')
		.build();
	});

	test.after(function(){
		driver.quit();
	});

	test.ignore('should navigate to url',function(){
		driver.get(url);
		var link = driver.findElement(By.linkText('this')).click();
		driver.sleep(1000);
		driver.navigate().to(url);
		driver.wait(until.elementLocated(By.id("MainSection"))
		, 10000).then(function() {
			driver.findElement(By.id("MainSection")).getText().then(function(txt) { 
				assert.isNotNull(txt)
			});
		driver.sleep(5000);
		});
	});	

	test.it('file should upload',function(){
		driver.get(url);
		var link = driver.findElement(By.linkText('this')).click();
		driver.sleep(1000);
		driver.navigate().to(url);
		driver.findElement(By.id('upfile_0')).sendKeys(fileurl);
		//driver.findElement(By.id('UseNotifications')).click();
		driver.findElement(By.id('readTermsOfUse')).click();
		driver.findElement(By.id('upload_button')).click();
		driver.sleep(5000);

		driver.wait(until.elementLocated(By.id("TopMessage"))
		, 10000).then(function() {
			driver.findElement(By.id("TopMessage")).getText().then(function(txt) { 
				assert.isNotNull(txt)
			});
		driver.sleep(5000);
		});
	});

});
