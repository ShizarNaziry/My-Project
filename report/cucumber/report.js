$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Account.feature");
formatter.feature({
  "line": 1,
  "name": "Test creating Account",
  "description": "I want to use this feature file to test creating account in our salesforce application",
  "id": "test-creating-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Creating Account",
  "description": "",
  "id": "test-creating-account;creating-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I go to salesforce home page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter username",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I see the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I create Account",
  "rows": [
    {
      "cells": [
        "Account Name",
        "Account Number",
        "Parent Account",
        "Account Site",
        "Type",
        "Industry",
        "Annual Revenue",
        "Rating",
        "Phone",
        "Fax",
        "Website",
        "Ticker Symbol",
        "Ownership",
        "Employees",
        "SIC Code",
        "Billing Street",
        "Billing City",
        "Billing State/Province",
        "Billing Zip/Postal Code",
        "Billing Country",
        "Customer Priority",
        "Month",
        "Year",
        "Day",
        "Number of Locations",
        "Active",
        "SLA Serial Number",
        "Description"
      ],
      "line": 13
    },
    {
      "cells": [
        "Costco",
        "1212",
        "T-Mobile",
        "23432",
        "Other",
        "Retail",
        "25000",
        "Warm",
        "571-121-2434",
        "123-234-1321",
        "www.a4va.com",
        "$$%%^",
        "Private",
        "12",
        "a34sdf",
        "123 AB4C Street",
        "Woodbridge4",
        "Virginiaa",
        "223222",
        "USA",
        "High",
        "November",
        "2019",
        "25",
        "12",
        "Yes",
        "23432",
        "Hello World"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I ignore the error and save",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_open_chrome_browser()"
});
formatter.result({
  "duration": 1328681575,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_salesforce_home_page()"
});
formatter.result({
  "duration": 1376002571,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_username()"
});
formatter.result({
  "duration": 100147030,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_password()"
});
formatter.result({
  "duration": 58626223,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 603801987,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_see_the_dashboard()"
});
formatter.result({
  "duration": 27655895,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#userNavLabel\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027faisals-mbp.lan\u0027, ip: \u0027fe80:0:0:0:801:3bfe:7d6:1b77%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: /var/folders/hc/8gz81p2j1rb...}, goog:chromeOptions: {debuggerAddress: localhost:52655}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e5a761329f2e70a4c48d98fcde39a3d6\n*** Element info: {Using\u003did, value\u003duserNavLabel}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat stepDefinition.LoginTest.i_see_the_dashboard(LoginTest.java:41)\n\tat ✽.Then I see the dashboard(feature/Account.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "location": "AccountTest.i_create_Account(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.i_ignore_the_error_and_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.i_quit_the_browser1()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test Salesforce login functionality",
  "description": "I want to use this feature file to test the login functionality of our salesforce application",
  "id": "test-salesforce-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "login using valid credentials",
  "description": "",
  "id": "test-salesforce-login-functionality;login-using-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to salesforce home page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I see the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_open_chrome_browser()"
});
formatter.result({
  "duration": 871918020,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_salesforce_home_page()"
});
formatter.result({
  "duration": 1585090707,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_username()"
});
formatter.result({
  "duration": 96557740,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_password()"
});
formatter.result({
  "duration": 59294925,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 653075655,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_see_the_dashboard()"
});
formatter.result({
  "duration": 19346977,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#userNavLabel\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027faisals-mbp.lan\u0027, ip: \u0027fe80:0:0:0:801:3bfe:7d6:1b77%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: /var/folders/hc/8gz81p2j1rb...}, goog:chromeOptions: {debuggerAddress: localhost:52707}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 57bfb32e0d2aa5b21d4c18c7431c856f\n*** Element info: {Using\u003did, value\u003duserNavLabel}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat stepDefinition.LoginTest.i_see_the_dashboard(LoginTest.java:41)\n\tat ✽.Then I see the dashboard(feature/login.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginTest.i_quit_the_browser1()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "login using invalid credintials",
  "description": "",
  "id": "test-salesforce-login-functionality;login-using-invalid-credintials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I go to salesforce home page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter ivalid username",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter invalid password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should not be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_open_chrome_browser()"
});
formatter.result({
  "duration": 929861555,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_salesforce_home_page()"
});
formatter.result({
  "duration": 1447244778,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_ivalid_username()"
});
formatter.result({
  "duration": 92009252,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_invalid_password()"
});
formatter.result({
  "duration": 48602141,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 509795384,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_not_be_able_to_login()"
});
formatter.result({
  "duration": 38285354,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_quit_the_browser1()"
});
formatter.result({
  "duration": 86179389,
  "status": "passed"
});
});