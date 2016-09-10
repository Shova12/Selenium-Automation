var assert = require('chai').assert,
test = require('selenium-webdriver/testing'),
until = require('selenium-webdriver').until,
webdriver = require('selenium-webdriver'),
By = require('selenium-webdriver').By;


test.describe('Encodable',function(){
	var driver;
	var url = "https://encodable.com/uploaddemo/";
	var fileUrl = "C:\\Users\\ksprajapati\\Documents\\UserTesting\\launched.lck";

	test.before(function(){
		driver = new webdriver.Builder()
		.forBrowser('firefox')
		.build();
	});

	test.after(function(){
		driver.quit();
	});

	test.it("Uploading file should work",function(){
		driver.get(url);
		driver.findElement(By.id('uploadname1')).sendKeys(fileUrl);
		driver.findElement(By.id('formfield-email_address')).sendKeys('dsafds@qw.com');
		driver.findElement(By.id('formfield-first_name')).sendKeys('teret');
		driver.findElement(By.id("uploadbutton")).click();

		//driver.sleep(5000);
		driver.wait(until.elementLocated(By.id("fcuploadsummary"))
		, 10000).then(function() {
			driver.findElement(By.id("fcuploadsummary")).getText().then(function(txt) { 
				assert.isNotNull(txt)
			});
		driver.sleep(5000);
		});

	});
});	
