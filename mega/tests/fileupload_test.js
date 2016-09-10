var assert = require('chai').assert,
test = require('selenium-webdriver/testing'),
until = require('selenium-webdriver').until,
webdriver = require('selenium-webdriver'),
By = require('selenium-webdriver').By;

test.describe('Mega file upload',function(){
	var driver;
	var url = "http://www.megafileupload.com/";
	var fileUrl = "C:\\Users\\ksprajapati\\Documents\\UserTesting\\launched.lck";

	test.before(function(){
		driver = new webdriver.Builder()
		.forBrowser('firefox')
		.build();
	});

	test.after(function(){
		driver.quit();
	});

	test.ignore('upload by remote url', function(){
		driver.get(url);
		var uploadTab= driver.findElement(By.linkText("SELECT FILE")).click();
		driver.sleep(1000);
		driver.findElement(By.linkText("Remote Url Upload")).click();
		driver.findElement(By.id('urlList')).sendKeys(fileUrl);	
		driver.findElement(By.id('transferFilesButton')).click();
		driver.sleep(5000);
	});
		
		//driver.wait(until.elementLocated(By.id('transferFilesButton')), 10000)
			//.then(function(){
				//driver.findElement(By.id())

		//});

	test.it('file upload', function(){
		driver.get(url);
		var uploadTab= driver.findElement(By.linkText("SELECT FILE")).click();
		driver.sleep(1000);
		driver.findElement(By.xpath(".//*[@id='initialUploadSection']/div[1]/div/div")).sendKeys(fileUrl);
		driver.sleep(10000);
		//driver.findElement(By.xpath(".//*[@id='processQueueSection']/div[1]/button")).click();
		//driver.wait(until.elementLocated(By.xpath(".//*[@id='processQueueSection']/div[1]/button")),1000).click();
	});	
});