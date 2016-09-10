var assert = require('chai').assert,
test = require('selenium-webdriver/testing'),
untill = require('selenium-webdriver').until,
webdriver = require('selenium-webdriver'),
By = require('selenium-webdriver').By;

webdriver.logging.installConsoleHandler();
webdriver.logging.getLogger('webdriver.http')
    .setLevel(webdriver.logging.Level.ALL);

test.describe('Add new customer',function(){
	var driver;
	test.before(function(){
		driver = new webdriver.Builder()
		.forBrowser('firefox')
		.build();
	});
	
	test.after(function(){
		driver.quit();
	});

	test.it('link home',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.linkText("Home")).click();
		driver.sleep(1000);
		driver.findElement(By.xpath('html/body/table/tbody/tr/td/table/tbody/tr[2]/td/marquee')).getText()
			.then(function(text){
				assert.equal(text, "Welcome To Manager's Page of Guru99 Bank");
			});	
		driver.sleep(5000);
	});

});