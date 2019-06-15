package com.utilities;

public class TestContext {

	private WebDriverManager webDriverManager;

	public TestContext() {
		webDriverManager = new WebDriverManager();
	}

	public WebDriverManager getWebDriverManager() {
		return webDriverManager;
	}
	
}
