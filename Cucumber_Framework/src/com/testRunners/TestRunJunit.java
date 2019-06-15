package com.testRunners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty","html:reports/test-report",
		"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-test-reports/AutomationReport.html",
		"json:target/cucumber-test-reports/Cucumber.json"},
features="resources",
glue="com.stepDefinitions",
//dryRun = true,
tags= {"@Demo1"})

public class TestRunJunit {

}
