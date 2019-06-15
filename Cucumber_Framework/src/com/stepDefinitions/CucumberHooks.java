package com.stepDefinitions;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.cucumber.listener.Reporter;
import com.testRunners.TestRunJunit;
import com.utilities.ConfigReader;
import com.utilities.TestContext;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class CucumberHooks extends TestRunJunit {

	public TestContext testContext;
	public WebDriver driver;
	ConfigReader configReader = new ConfigReader();

	public CucumberHooks(TestContext testContext) {
		this.testContext = testContext;
	}

	@Before(order = 0)
	public void instantiateDriver(Scenario scenario) {
		driver = testContext.getWebDriverManager().getDriver();
	}

	@Before(order = 1)
	public void login(Scenario scenario) {
		driver.manage().window().maximize();
		driver.get(configReader.getApplicationURL());
	}

	@After
	public void endSuite(Scenario scenario) {
		if (scenario.isFailed()) {
			try {
				String base64 = "data:image/gif;base64,"+screenShot();
				Reporter.addScreenCaptureFromPath(base64);
			} catch (Exception e) {
				throw new RuntimeException("Unable to capture screenshot");
			}
		}
		driver.quit();	
	}
	
	public String screenShot() {
		return ((TakesScreenshot)driver).getScreenshotAs(OutputType.BASE64);
	}

}
