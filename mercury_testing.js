var assert =  require('chai').assert,
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver'),
By = require('selenium-webdriver').By;

//logs
webdriver.logging.installConsoleHandler();
webdriver.logging.getLogger('webdriver.http')
    .setLevel(webdriver.logging.Level.ALL);

test.describe('Mercury Tour',function(){
	var driver;
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

	test.ignore('Multiple Actions', function() {
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

	test.it('Click Reset', function() {
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
