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
	var username;
	var password;
	test.before(function(){
		driver = new webdriver.Builder()
		.forBrowser('firefox')
		.build();
	});

	test.after(function(){
		driver.quit();
	});

	test.it('customer page',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.linkText("New Customer")).click(); 
		driver.sleep(5000);

		driver.findElement(By.xpath("html/body/table/tbody/tr/td/table/tbody/tr[1]/td/p")).getText()
			.then(function(te){
				assert.equal(te,"Add New Customer");
			});
		driver.sleep(5000);
	});

	test.it('Add customer',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("name")).sendKeys("Jimmy"); 
		driver.findElement(By.name("rad1")).click();
		driver.findElement(By.name("dob")).sendKeys("12/02/1996");
		driver.findElement(By.name("addr")).sendKeys("14 Boston road");
		driver.findElement(By.name("city")).sendKeys("Brick");
		driver.findElement(By.name("state")).sendKeys("NJ");
		driver.findElement(By.name("pinno")).sendKeys("142351"); 
		driver.findElement(By.name("telephoneno")).sendKeys("71245625478");
		driver.findElement(By.name("emailid")).sendKeys("test@test.com");
		driver.findElement(By.name("password")).sendKeys("UbYqYje");
		driver.sleep(1000);
		driver.findElement(By.name("sub")).click();
		driver.sleep(5000);
	});

	test.it('Click Reset',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("name")).sendKeys("Jimmy"); 
		driver.findElement(By.name("rad1")).click();
		driver.findElement(By.name("dob")).sendKeys("12/02/1996");
		driver.findElement(By.name("addr")).sendKeys("14 Boston road");
		driver.findElement(By.name("city")).sendKeys("Brick");
		driver.findElement(By.name("state")).sendKeys("NJ");
		driver.findElement(By.name("pinno")).sendKeys("142351"); 
		driver.findElement(By.name("telephoneno")).sendKeys("71245625478");
		driver.findElement(By.name("emailid")).sendKeys("test@test.com");
		driver.findElement(By.name("password")).sendKeys("UbYqYje");
		driver.sleep(1000);
		driver.findElement(By.name("res")).click();
		driver.sleep(1000);
	});

	test.it('pop alert',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("sub")).click();
		var alert = driver.switchTo().alert();
		driver.sleep(1000);
			alert.accept();
		driver.sleep(5000);
	});


	


	test.it('refersh browser',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("name")).sendKeys("");
		driver.findElement(By.name("rad1")).click();
		driver.findElement(By.name("dob")).sendKeys("");
		driver.findElement(By.name("addr")).sendKeys("14 Boston road");
		driver.findElement(By.name("city")).sendKeys("Brick");
		driver.findElement(By.name("state")).sendKeys("NJ");
		driver.findElement(By.name("pinno")).sendKeys("142351"); 
		driver.findElement(By.name("telephoneno")).sendKeys("");
		driver.findElement(By.name("emailid")).sendKeys("test@test.com");
		driver.findElement(By.name("password")).sendKeys("");
		driver.sleep(1000);
		driver.findElement(By.name("res")).click(); 
		driver.sleep(1000);

		driver.navigate().refresh(); //refresh broswer
		driver.sleep(5000);
	});

	test.ignore('err message for customer name',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("name")).sendKeys("142351");
		driver.findElement(By.name("rad1")).click();
		driver.findElement(By.name("dob")).sendKeys("12/02/1996");
		driver.findElement(By.name("addr")).sendKeys("14 Boston road");
		driver.findElement(By.name("city")).sendKeys("Brick");
		driver.findElement(By.name("state")).sendKeys("NJ");
		driver.findElement(By.name("pinno")).sendKeys("142351"); 
		driver.findElement(By.name("telephoneno")).sendKeys("71245625478");
		driver.findElement(By.name("emailid")).sendKeys("test@test.com");
		driver.findElement(By.name("password")).sendKeys("UbYqYje");
		driver.sleep(1000);
		driver.findElement(By.name("sub")).click(); 
		driver.sleep(1000);

		driver.findElement(By.id("message")).getText()
			.then(function(tex){
				assert.equal(tex,"Numbers are not allowed")
			});
		driver.sleep(5000);
	});


	test.ignore('err message for customer name',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("name")).sendKeys("");
		driver.findElement(By.name("rad1")).click();
		driver.findElement(By.name("dob")).sendKeys("12/02/1996");
		driver.findElement(By.name("addr")).sendKeys("14 Boston road");
		driver.findElement(By.name("city")).sendKeys("Brick");
		driver.findElement(By.name("state")).sendKeys("NJ");
		driver.findElement(By.name("pinno")).sendKeys("142351"); 
		driver.findElement(By.name("telephoneno")).sendKeys("71245625478");
		driver.findElement(By.name("emailid")).sendKeys("test@test.com");
		driver.findElement(By.name("password")).sendKeys("UbYqYje");
		driver.sleep(1000);
		driver.findElement(By.name("sub")).click(); 
		driver.sleep(1000);

		driver.findElement(By.id("message")).getText()
			.then(function(tex){
				assert.equal(tex,"Customer name must not be blank")
			});
		driver.sleep(5000);
	});

	test.it('err message for dob',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("dob")).sendKeys("");
		driver.findElement(By.name("addr")).sendKeys("14 Boston road");
		driver.sleep(1000);
		
		driver.findElement(By.id("message24")).getText()
			.then(function(tex){
				assert.equal(tex,"Date Field must not be blank")
			});
		driver.sleep(5000);

	});

	test.it('err message for address',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("addr")).sendKeys("");
		driver.findElement(By.name("city")).sendKeys("Brick");
		driver.sleep(1000);
		
		driver.findElement(By.id("message3")).getText()
			.then(function(tex){
				assert.equal(tex,"Address Field must not be blank")
			});
		driver.sleep(5000);
	});

	test.it('err message for address',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("addr")).sendKeys("14 Boston,USA");
		driver.findElement(By.name("city")).sendKeys("Brick");
		driver.sleep(1000);
		
		driver.findElement(By.id("message3")).getText()
			.then(function(tex){
				assert.equal(tex,"Special characters are not allowed")
			});
		driver.sleep(5000);
	});


	test.it('err message for city',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("city")).sendKeys("");
		driver.findElement(By.name("state")).sendKeys("NJ");
		driver.sleep(1000);
		
		driver.findElement(By.id("message4")).getText()
			.then(function(tex){
				assert.equal(tex,"City Field must not be blank")
			});
		driver.sleep(5000);
	});



});