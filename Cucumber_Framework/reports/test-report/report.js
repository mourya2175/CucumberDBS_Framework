$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyDemo.feature");
formatter.feature({
  "line": 2,
  "name": "this is a demo feature file",
  "description": "",
  "id": "this-is-a-demo-feature-file",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Demo1"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "this is a demo scenario outline",
  "description": "",
  "id": "this-is-a-demo-feature-file;this-is-a-demo-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Call_With_Data \"loginToMercuryTravels\" on \"com.glue.DemoClass\"",
  "rows": [
    {
      "cells": [
        "User Name",
        "\u003cUser_Name\u003e"
      ],
      "line": 6
    },
    {
      "cells": [
        "Password",
        "\u003cPassword\u003e"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Call \"clickOnCruises\" on \"com.glue.DemoClass\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"verifyNavigation\" for \"Cruise\" on \"com.glue.DemoClass\"",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "this-is-a-demo-feature-file;this-is-a-demo-scenario-outline;",
  "rows": [
    {
      "cells": [
        "User_Name",
        "Password"
      ],
      "line": 12,
      "id": "this-is-a-demo-feature-file;this-is-a-demo-scenario-outline;;1"
    },
    {
      "cells": [
        "anil",
        "anil"
      ],
      "line": 13,
      "id": "this-is-a-demo-feature-file;this-is-a-demo-scenario-outline;;2"
    },
    {
      "cells": [
        "naga",
        "naga"
      ],
      "line": 14,
      "id": "this-is-a-demo-feature-file;this-is-a-demo-scenario-outline;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4119805274,
  "status": "passed"
});
formatter.before({
  "duration": 3162713359,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "this is a demo scenario outline",
  "description": "",
  "id": "this-is-a-demo-feature-file;this-is-a-demo-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Demo1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Call_With_Data \"loginToMercuryTravels\" on \"com.glue.DemoClass\"",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "User Name",
        "anil"
      ],
      "line": 6
    },
    {
      "cells": [
        "Password",
        "anil"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Call \"clickOnCruises\" on \"com.glue.DemoClass\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"verifyNavigation\" for \"Cruise\" on \"com.glue.DemoClass\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "loginToMercuryTravels",
      "offset": 16
    },
    {
      "val": "com.glue.DemoClass",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.call_with_data_on(String,String,String,String\u003e)"
});
formatter.result({
  "duration": 5534477686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clickOnCruises",
      "offset": 6
    },
    {
      "val": "com.glue.DemoClass",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.call_on(String,String)"
});
formatter.result({
  "duration": 941320872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "verifyNavigation",
      "offset": 1
    },
    {
      "val": "Cruise",
      "offset": 24
    },
    {
      "val": "com.glue.DemoClass",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.for_on(String,String,String)"
});
formatter.result({
  "duration": 52506314,
  "status": "passed"
});
formatter.after({
  "duration": 138068,
  "status": "passed"
});
formatter.before({
  "duration": 3217079,
  "status": "passed"
});
formatter.before({
  "duration": 864915141,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "this is a demo scenario outline",
  "description": "",
  "id": "this-is-a-demo-feature-file;this-is-a-demo-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Demo1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Call_With_Data \"loginToMercuryTravels\" on \"com.glue.DemoClass\"",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "User Name",
        "naga"
      ],
      "line": 6
    },
    {
      "cells": [
        "Password",
        "naga"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Call \"clickOnCruises\" on \"com.glue.DemoClass\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"verifyNavigation\" for \"Cruise\" on \"com.glue.DemoClass\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "loginToMercuryTravels",
      "offset": 16
    },
    {
      "val": "com.glue.DemoClass",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.call_with_data_on(String,String,String,String\u003e)"
});
formatter.result({
  "duration": 2291922908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clickOnCruises",
      "offset": 6
    },
    {
      "val": "com.glue.DemoClass",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.call_on(String,String)"
});
formatter.result({
  "duration": 697529231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "verifyNavigation",
      "offset": 1
    },
    {
      "val": "Cruise",
      "offset": 24
    },
    {
      "val": "com.glue.DemoClass",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.for_on(String,String,String)"
});
formatter.result({
  "duration": 33517781,
  "error_message": "java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat com.stepDefinitions.StepDefinitions.for_on(StepDefinitions.java:45)\r\n\tat ✽.And \"verifyNavigation\" for \"Cruise\" on \"com.glue.DemoClass\"(MyDemo.feature:9)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//font[contains(text(),\u00277 nights from $850\u0027)]\"}\n  (Session info: chrome\u003d75.0.3770.90)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027NAGA-LAPTOP\u0027, ip: \u0027100.0.1.129\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\naga\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59133}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.90, webStorageEnabled: true}\nSession ID: e1936292f7ccabdf53745776330a207b\n*** Element info: {Using\u003dxpath, value\u003d//font[contains(text(),\u00277 nights from $850\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.getText(Unknown Source)\r\n\tat com.glue.DemoClass.verifyNavigation_Cruise(DemoClass.java:52)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat com.stepDefinitions.StepDefinitions.for_on(StepDefinitions.java:45)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 406528834,
  "status": "passed"
});
});