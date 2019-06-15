package com.utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WebDriverManager {

	private static WebDriver driver;

	public WebDriver getDriver() {
		if (driver == null) {
			createDriver();
		}
		return driver;
	}

	private WebDriver createDriver() {
		io.github.bonigarcia.wdm.WebDriverManager.chromedriver().version("2.46").setup();
		driver = new ChromeDriver();
		return driver;
	}
}
