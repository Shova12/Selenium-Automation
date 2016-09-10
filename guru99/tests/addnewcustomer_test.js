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
	var invaildCredentiaOfCc=[{
		customername:''
	},
	{
		customername: '1234'
	},
	{
		customername: '@test'
	},
	{
		customername: ' '
	
	}]

	var invaildMessageCc=[{
		/*messagecustomer:'Customer name must not be blank'
	},
	{*/
		messagecustomer: 'Numbers are not allowed'
	},
	{
		messagecustomer: 'Special characters are not allowed'
	},
	{
		messagecustomer: 'First character can not have space'
	
	}]

	test.before(function(){
		driver = new webdriver.Builder()
		.forBrowser('firefox')
		.build();
	});

	test.after(function(){
		driver.quit();
	});

	test.ignore('Customer page',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.linkText("New Customer")).click(); 
		driver.sleep(5000);

		driver.findElement(By.xpath("html/body/table/tbody/tr/td/table/tbody/tr[1]/td/p")).getText()
			.then(function(te){
				assert.equal(te,"Add New Customer");
			});
		driver.sleep(5000);
	});

	test.ignore('Add customer',function(){
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

	test.ignore('Click Reset',function(){
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

	test.ignore('pop alert',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("sub")).click();
		var alert = driver.switchTo().alert();
		driver.sleep(1000);
			alert.accept();
		driver.sleep(5000);
	});

	test.ignore('refersh browser',function(){
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

	test.ignore('Number not allow err message',function(){
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

	test.ignore('Blamk customer name err message',function(){
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

	test.ignore('Blank date field err message',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("dob")).sendKeys("");
		driver.findElement(By.name("addr")).sendKeys("14 Boston road");
		driver.findElement(By.id("message24")).getText()
			.then(function(tex){
				assert.equal(tex,"Date Field must not be blank")
			});
		driver.sleep(1000);

	});

	test.ignore('Blank Address err message',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("addr")).sendKeys("");
		driver.findElement(By.name("city")).sendKeys("Brick");
		driver.findElement(By.id("message3")).getText()
			.then(function(tex){
				assert.equal(tex,"Address Field must not be blank")
			});
		driver.sleep(1000);
	});

	test.ignore('special characters err message',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("addr")).sendKeys("14 Boston,USA");
		driver.findElement(By.name("city")).sendKeys("Brick");
		driver.findElement(By.id("message3")).getText()
			.then(function(tex){
				assert.equal(tex,"Special characters are not allowed")
			});
		driver.sleep(1000);
	});

	test.ignore('Blank city err message',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("city")).sendKeys("");
		driver.findElement(By.name("state")).sendKeys("NJ");
		driver.findElement(By.id("message4")).getText()
			.then(function(tex){
				assert.equal(tex,"City Field must not be blank")
			});
		driver.sleep(1000);
	});

	test.ignore('Number err message in city field',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("city")).sendKeys("123");
		driver.findElement(By.name("state")).sendKeys("NJ");
		driver.findElement(By.id("message4")).getText()
			.then(function(tex){
				assert.equal(tex,"Numbers are not allowed")
			});
		driver.sleep(1000);
	});

	test.ignore('Special characters err message in city field',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("city")).sendKeys("Brick,");
		driver.findElement(By.name("state")).sendKeys("NJ");
		driver.findElement(By.id("message4")).getText()
			.then(function(tex){
				assert.equal(tex,"Special characters are not allowed")
			});
		driver.sleep(1000);
	});

	test.ignore('Blank State err message',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("state")).sendKeys("");
		driver.findElement(By.name("pinno")).sendKeys("142351")
		driver.findElement(By.id("message5")).getText()
			.then(function(tex){
				assert.equal(tex,"State must not be blank")
			});
		driver.sleep(1000);
	});

	test.ignore('Special characters err message in State Field',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("state")).sendKeys(",");
		driver.findElement(By.name("pinno")).sendKeys("142351")
		driver.findElement(By.id("message5")).getText()
			.then(function(tex){
				assert.equal(tex,"Special characters are not allowed")
			});
		driver.sleep(1000);
	});
	test.ignore('Number err message in State Field',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("state")).sendKeys("12");
		driver.findElement(By.name("pinno")).sendKeys("142351")
		driver.findElement(By.id("message5")).getText()
			.then(function(tex){
				assert.equal(tex,"Numbers are not allowed")
			});
		driver.sleep(1000);
	});

	test.ignore('Number err message in State Field',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		driver.findElement(By.name("pinno")).sendKeys("");
		driver.findElement(By.name("telephoneno")).sendKeys("71245625478");
		driver.findElement(By.id("message6")).getText()
			.then(function(tex){
				assert.equal(tex,"Numbers are not allowed")
			});
		driver.sleep(1000);
	});

	test.ignore('Invaild customername',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		invaildCredentiaOfCc.forEach(function(customer){
			driver.findElement(By.name("name")).sendKeys(customer.customername);
			driver.findElement(By.name("rad1")).click();
			driver.sleep(1000)

		});
	});
		
	test.it('Invaild message for Cc',function(){
		driver.get("http://demo.guru99.com/V4/manager/addcustomerpage.php");
		invaildMessageCc.forEach(function(message){	
			driver.findElement(By.id("message")).getText()
				.then(function(tex){
					assert.equal(tex, message.messagecustomer)
				});
		//driver.sleep(5000);
		});
	});
});