var assert =  require('chai').assert,
test = require('selenium-webdriver/testing'),
until = require('selenium-webdriver').until,
webdriver = require('selenium-webdriver'),
By = require('selenium-webdriver').By;

//logs
webdriver.logging.installConsoleHandler();
webdriver.logging.getLogger('webdriver.http')
    .setLevel(webdriver.logging.Level.ALL);

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

	test.ignore('Click Reset', function() {
		driver.get("http://demo.guru99.com/V4/");
		driver.findElement(By.name("uid")).sendKeys('test');
		driver.findElement(By.name("password")).sendKeys('test');
		driver.sleep(1000);
		driver.findElement(By.name("btnReset")).click();
	});

	test.it('Click Login', function() {
		driver.get("http://demo.guru99.com/V4/");
		driver.findElement(By.name("uid")).sendKeys('test');
		driver.findElement(By.name("password")).sendKeys('test');
		driver.sleep(1000);
		driver.findElement(By.name("btnLogin")).click();
		driver.sleep(5000);
	});

	test.it('pop alert',function(){ //alert mistaken
		driver.get("http://demo.guru99.com/V4/");
		driver.findElement(By.name("uid")).sendKeys('test');
		driver.findElement(By.name("password")).sendKeys('test');
		driver.findElement(By.name("btnLogin")).click();
		driver.sleep(1000);
		var alert = driver.switchTo().alert();
		driver.sleep(1000);
		alert.accept();
		driver.sleep(5000);
	});

	test.it('Click here link',function(){
		driver.get("http://demo.guru99.com/V4/");
		var link_here = driver.findElement(By.linkText("here")); 
		link_here.click();
		//driver.sleep(5000);
		driver.wait(until.titleIs('Guru99 Bank Home Page'), 5000);
	});

	test.it('should to go next link',function(){
		driver.get("http://demo.guru99.com");
		var inputBox = driver.findElement(By.name("emailid")).sendKeys('test@test.com'); 
		driver.sleep(5000);
	});

	test.it('error message ',function(){
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
	test.it('error message ',function(){
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
		//}, 2000)
	test.it('should to click on submit',function(){
		driver.get("http://demo.guru99.com");
		var inputBox = driver.findElement(By.name("btnLogin")).click(); 
		driver.sleep(5000);
	});

	test.it('error message ',function(){
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

	test.it('Login',function(){
		//console.log(' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< userName: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', username);
		driver.get("http://demo.guru99.com/V4/");
		driver.findElement(By.xpath("html/body/form/table/tbody/tr[1]/td[2]/input")).sendKeys(username); 
		driver.findElement(By.xpath("html/body/form/table/tbody/tr[2]/td[2]/input")).sendKeys(password); 
		driver.findElement(By.xpath("html/body/form/table/tbody/tr[3]/td[2]/input[1]")).click();
		driver.sleep(5000);
		//driver.wait(until.titleIs(' Guru99 Bank Manager HomePage '), 5000);
		driver.findElement(By.xpath("html/body/table/tbody/tr/td/table/tbody/tr[2]/td/marquee")).getText()
			.then(function(t) {
				assert.equal(t,"Welcome To Manager's Page of Guru99 Bank");
		});
		driver.sleep(5000);
	});	

	test.ignore('link home',function(){
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

//mngr37405
//UbYqYje