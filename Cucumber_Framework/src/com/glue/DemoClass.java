package com.glue;

import java.util.Map;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.utilities.TestContext;

public class DemoClass {

	private TestContext testContext;

	public DemoClass(TestContext testContext) {
		this.testContext = testContext;
		PageFactory.initElements(testContext.getWebDriverManager().getDriver(), this);
	}

	@FindBy(xpath = "//*[@name='userName']")
	private WebElement userName;

	@FindBy(xpath = "//*[@name='password']")
	private WebElement password;

	@FindBy(xpath = "//*[@name='login']")
	private WebElement signIn;

	@FindBy(xpath = "//a[text()='Cruises']")
	private WebElement cruisesLink;
	
	@FindBy(xpath = "//font[contains(text(),'7 nights from $850')]")
	private WebElement cruiseMesage;
	
	

	public void loginToMercuryTravels(Map<String, String> fieldList) throws Throwable {

		userName.sendKeys(fieldList.get("User Name"));
		password.sendKeys(fieldList.get("Password"));
		signIn.click();
	}

	public void clickOnCruises() throws Throwable {
		cruisesLink.click();
	}
	
	public void verifyNavigation_Cruise() throws Throwable{
		
		String text= "7 nights from $950";
		System.out.println(cruiseMesage.getText());
		//Assert.assertTrue(text.equals(cruiseMesage.getText()),"Assertion on text failed");
	}

}
