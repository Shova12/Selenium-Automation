var assert =  require('chai').assert,
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');

test.describe('Mercury Tour',function(){
	test.it('Welcome: Mercury Tours',function(){
		var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).
		build();

		driver.get('http://www.newtours.demoaut.com');
		//actualTitle= driver.getTitle();
		//driver.getPageSource();
		var link = driver.findElement(webdriver.By.partialLinkText('here')).click();
		function(){
			if link == driver.findElement(webdriver.By.partialLinkText('here')){
				console.log('your are in rite page')
			}	
			else{
				console.log('please repeate again')
			}	

		}
		

		/*var inputBox = driver.findElement(webdriver.By.name('userName'));
		inputBox.sendKeys('tutorial').then(inputBox.clear());
		var inputBox = driver.findElement(webdriver.By.name('password'));
		inputBox.sendKeys('tutorial').then(inputBox.clear());
		//var button = driver.findElement(webdriver.By.css("input[value='Business']")).click();
		//driver.findElement(webdriver.By.name('login')).click();	

		//driver.quit();
		/*driver.get('http://jsbin.com/usidix/1');
		driver.switchTo().frame('classFrame');
		driver.findElement(webdriver.By.linkText('Deprecated')).click(); //to switch browers
		driver.quit();
		
		driver.get('http://jsbin.com/usidix/1');
		driver.findElement(webdriver.By.css("input[value=\"Go!\"]")).click();
		alertMessage = driver.switchTo().alert().accept();

		console.log(alertMessage);*/
	});

});

