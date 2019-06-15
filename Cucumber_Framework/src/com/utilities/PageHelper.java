package com.utilities;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;

public class PageHelper {

	WebDriver driver;

	public PageHelper(WebDriver driver) {
		this.driver = driver;
	}

	public void sendKeys(WebElement we, String textToWrite) throws Throwable{

		waitForElementToBeClickable(we, 5000);
		we.clear();
		we.sendKeys(textToWrite);
	}
	
	public void click(WebElement we) throws Throwable{
	
		waitForElementToBeClickable(we, 5000);
		we.click();
	}

	private WebElement waitForElementToBeClickable(WebElement element, int timeOut) throws Throwable{

		Duration duration = Duration.ofMillis(2000);
		WebElement waitElement = new FluentWait<WebDriver>(driver).ignoring(Throwable.class).pollingEvery(duration)
				.until(ExpectedConditions.visibilityOf(element));

		return waitElement;
	}
}
