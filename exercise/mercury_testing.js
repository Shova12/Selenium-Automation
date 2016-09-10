var assert =  require('chai').assert,
test = require('selenium-webdriver/testing'),
until = require('selenium-webdriver').until,
webdriver = require('selenium-webdriver'),
By = require('selenium-webdriver').By;

//logs
webdriver.logging.installConsoleHandler();
webdriver.logging.getLogger('webdriver.http')
    .setLevel(webdriver.logging.Level.ALL);

test.describe('Mercury Tour',function(){
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

	test.ignore('Welcome: Mercury Tours',function(){
		driver.get('http://www.newtours.demoaut.com');
		var link_Home = driver.findElement(By.linkText("Flights")); 
		link_Home.click();
		driver.sleep(5000);
	});

	test.ignore('Multiple Actions', function() {    //test does not run 
		driver.get('http://www.facebook.com');
		var txtUsername = driver.findElement(By.id("email"));
		txtUsername
			//.click()
			//.keyDown(Keys.SHIFT)
			.sendKeys("hello")
			//.keyUp(Keys.SHIFT)
			//	.doubleClick();
	})

	test.ignore('Alert', function() {
		driver.get('http://jsbin.com/usidix/1');
		driver.findElement(By.css("input[value=\"Go!\"]")).click();
		driver.sleep(500);
		alertMessage = driver.switchTo().alert().accept();
	})

	test.ignore('Depreciated', function() {
		driver.get('http://selenium.googlecode.com/svn/trunk/docs/api/java/index.html');
		driver.switchTo().frame('classFrame');
		driver.findElement(By.linkText('Deprecated')).click(); //to switch browers
	})

	test.ignore('Click Reset', function() {
		driver.get("http://demo.guru99.com/V4/");
		driver.findElement(By.name("uid")).sendKeys('test');
		driver.findElement(By.name("password")).sendKeys('test');
		driver.sleep(1000);
		driver.findElement(By.name("btnReset")).click();
	});

	test.ignore('Click Login', function() {
		driver.get("http://demo.guru99.com/V4/");
		driver.findElement(By.name("uid")).sendKeys('test');
		driver.findElement(By.name("password")).sendKeys('test');
		driver.sleep(1000);
		driver.findElement(By.name("btnLogin")).click();
		driver.sleep(5000);
	});

	test.ignore('Click here link',function(){
		driver.get("http://demo.guru99.com/V4/");
		var link_here = driver.findElement(By.linkText("here")); 
		link_here.click();
		//driver.sleep(5000);
		driver.wait(until.titleIs('Guru99 Bank Home Page'), 5000);
	});

	test.ignore('should to go next link',function(){
		driver.get("http://demo.guru99.com");
		var inputBox = driver.findElement(By.name("emailid")).sendKeys('test@test.com'); 
		driver.sleep(5000);
	});

	test.ignore('error message ',function(){
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
	test.ignore('error message ',function(){
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
			
		//}, 2000)
		

	});

	test.it('error message ',function(){
		driver.get("http://demo.guru99.com");
		var inputBox = driver.findElement(By.name("emailid")).sendKeys('test@test.com'); 
		var inputBox = driver.findElement(By.name("btnLogin")).click(); 
		driver.sleep(5000);
		//driver.wait(function() {
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
			
		//}, 5000)
	});

	test.it('Login',function(){
		console.log(' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< userName: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', username);
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

	test.ignore('should to click on submit',function(){
		driver.get("http://demo.guru99.com");
		var inputBox = driver.findElement(By.name("btnLogin")).click(); 
		driver.sleep(5000);
	});

// mngr37405
// UbYqYje 
	

		/*actualTitle= driver.getTitle();
		/driver.getPageSource();
		var innerText = driver.findElement(webdriver.By.xpath('//table[@width=\'270\']/tbody/tr[4]/td')).getText(innerText);
		console.log(innerText);
		var link = driver.findElement(webdriver.By.partialLinkText('here')).click();*/
	
		/*var action = new OpenQA.Selenium.Interactions.Actions(driver);
		var element = driver.FindElement(webdriver.By.linkText('Home'));
		action.MoveToElement(element).Perform();
		driver.FindElement(By.Id("favRemoveLink140075")).Click();
*/
		/*var inputBox = driver.findElement(webdriver.By.name('userName'));
		inputBox.sendKeys('tutorial').then(inputBox.clear());
		var inputBox = driver.findElement(webdriver.By.name('password'));
		inputBox.sendKeys('tutorial').then(inputBox.clear());
		var button = driver.findElement(webdriver.By.css("input[value='Business']")).click();
		driver.findElement(webdriver.By.name('login')).click();	

		driver.quit();

		
		driver.quit();

		console.log(alertMessage);*/
	

});
