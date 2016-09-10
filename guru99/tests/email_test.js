var assert =  require('chai').assert,
test = require('selenium-webdriver/testing'),
until = require('selenium-webdriver').until,
webdriver = require('selenium-webdriver'),
By = require('selenium-webdriver').By;

//logs
/*webdriver.logging.installConsoleHandler();
webdriver.logging.getLogger('webdriver.http')
    .setLevel(webdriver.logging.Level.INFO);*/

test.describe('Login',function(){
	var driver; //known as global variables and can be used anywhere in test case within function.
	var username;
	var password;

	
	test.before(function() {
	  driver = new webdriver.Builder()
		    .forBrowser('firefox')
		    .build();
	});

	test.after(function() {
	  driver.quit();
	});

	test.it('should to click on submit',function(){
		driver.get("http://demo.guru99.com");
		var inputBox = driver.findElement(By.name("btnLogin")).click(); 
		driver.sleep(5000);
	});

	test.ignore('should to go next link',function(){
		driver.get("http://demo.guru99.com");
		var inputBox = driver.findElement(By.name("emailid")).sendKeys('test@test.com'); 
		driver.sleep(5000);
	});

	test.ignore('error message ',function(){
		driver.get("http://demo.guru99.com");
		var inputBox = driver.findElement(By.name("emailid")).sendKeys('test@test.com'); 
		var inputBox = driver.findElement(By.name("btnLogin")).click(); 
		driver.sleep(5000);
		driver.findElement(By.xpath("html/body/table/tbody/tr[4]/td[1]")).getText()
		.then(function(text) {
			assert.equal(text, 'User ID :');
		});
		driver.findElement(By.xpath("html/body/table/tbody/tr[5]/td[1]")).getText()
		.then(function(text) {
			assert.equal(text, 'Password :');
		});

		driver.findElement(By.xpath("html/body/table/tbody/tr[4]/td[2]")).getText()
		.then(function(text) {
			username = text;
		});
		driver.findElement(By.xpath("html/body/table/tbody/tr[5]/td[2]")).getText()
		.then(function(text) {
			password = text;
		});
	});

	test.ignore('Email id blank err message ',function(){
		driver.get("http://demo.guru99.com");
		var inputBox = driver.findElement(By.name("emailid")).sendKeys(''); 
		var inputBox = driver.findElement(By.name("btnLogin")).click(); 
		driver.sleep(5000);
		//driver.wait(function() {
			driver.findElement(By.id("message9")).getText()
			.then(function(text) {
				//console.log(text, "This is test >>>>>>>>>>>>>>");
				assert.equal(text, 'Email ID must not be blank');
			});
			
	//	}, 2000)
	});
	test.ignore('Not vaild email id error message ',function(){
		driver.get("http://demo.guru99.com");
		var inputBox = driver.findElement(By.name("emailid")).sendKeys(' '); 
		var inputBox = driver.findElement(By.name("btnLogin")).click(); 
		//driver.sleep(5000);
	//	driver.wait(function() {
			driver.findElement(By.id("message9")).getText()
			.then(function(text) {
				//console.log(text, "This is test >>>>>>>>>>>>>>");
				assert.equal(text, 'Email ID is not valid');
			});
	});
});	