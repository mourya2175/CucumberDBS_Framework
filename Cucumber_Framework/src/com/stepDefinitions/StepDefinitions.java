package com.stepDefinitions;

import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.Map;

import com.testRunners.TestRunJunit;
import com.utilities.TestContext;

import cucumber.api.java.en.Given;

public class StepDefinitions extends TestRunJunit {

	private TestContext testContext;

	public StepDefinitions(TestContext testContext) {
		this.testContext = testContext;
	}

	@Given("^Call \"([^\"]*)\" on \"([^\"]*)\"$")
	public void call_on(String methodName, String page) throws Throwable {
		Class<?> cls = Class.forName(page);
		Constructor<?> constructor = cls.getConstructor(new Class[] { TestContext.class});
		Object obj = constructor.newInstance(testContext);
		Method method = cls.getDeclaredMethod(methodName);
		method.invoke(obj);
	}

	@Given("^Call_With_Data \"([^\"]*)\" on \"([^\"]*)\"$")
	public void call_with_data_on(String methodName, String page, Map<String, String> fieldList) throws Throwable {

		Class<?> cls = Class.forName(page);
		Constructor<?> constructor = cls.getConstructor(new Class[] { TestContext.class });
		Object obj = constructor.newInstance(testContext);
		Method method = cls.getDeclaredMethod(methodName, Map.class);
		method.invoke(obj, fieldList);
	}

	@Given("^\"([^\"]*)\" for \"([^\"]*)\" on \"([^\"]*)\"$")
	public void for_on(String action, String met, String page) throws Throwable {
		Class<?> cls = Class.forName(page);
		Constructor<?> constructor = cls.getConstructor(new Class[] { TestContext.class});
		Object object = constructor.newInstance(testContext);
		Method method = cls.getDeclaredMethod(action + "_" + met);
		method.invoke(object);
	}
}
