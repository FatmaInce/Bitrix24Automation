$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\activity_stream\\activity_stream.feature");
formatter.feature({
  "name": "As a user I should be able to create a task from activity stream.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Tasks"
    }
  ]
});
formatter.scenario({
  "name": "user can upload a file regarding to new task",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Tasks"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user goes to task module",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinitions.user_goes_to_module()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@id\u003d\u0027feed-add-post-form-tab-tasks\u0027]//span[contains(text(),\u0027Task\u0027)]\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WINDOW007\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\Bbogush\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:52186}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 02c14f8260df85e74d8c0af38c95a6b7\n*** Element info: {Using\u003dxpath, value\u003d//span[@id\u003d\u0027feed-add-post-form-tab-tasks\u0027]//span[contains(text(),\u0027Task\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.cybertek.step_definitions.TasksStepDefinitions.user_goes_to_module(TasksStepDefinitions.java:13)\r\n\tat ✽.user goes to task module(src\\test\\resources\\features\\activity_stream\\activity_stream.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "clicks to upload files",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinitions.clicks_to_upload_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selects a document from bitrix",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.selects_a_document_from_bitrix(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "go to sales and marketing folder",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.go_to_sales_and_marketing_folder()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "opens Quotes folder",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinitions.opens_Quotes_folder()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on the document to add",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.click_on_the_document_to_add()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "adds things to do",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.adds_things_to_do()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies that file was added",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinitions.user_verifies_that_file_was_added()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user quits",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_quits()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});