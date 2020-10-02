$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/test/LoginFunction.feature");
formatter.feature({
  "name": "Login Functionality in Banking Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Valid Login on the AUT",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User is on the Login Page of the Bank Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters correct user name \"\u003cname\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verify that manager Id is displayed on the Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "password"
      ]
    },
    {
      "cells": [
        "mngr285669",
        "mYpUnEz"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Valid Login on the AUT",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Login Page of the Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_the_login_page_of_the_bank_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct user name \"mngr285669\" and password \"mYpUnEz\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_correct_user_name_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that manager Id is displayed on the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verify_that_manager_id_is_displayed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Valid Login on the AUT",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User is on the Login Page of the Bank Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters correct user name \"\u003cname\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verify that manager Id is displayed on the Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "password"
      ]
    },
    {
      "cells": [
        "mngr285669",
        "mYpUnEz"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Valid Login on the AUT",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Login Page of the Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_the_login_page_of_the_bank_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct user name \"mngr285669\" and password \"mYpUnEz\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_correct_user_name_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that manager Id is displayed on the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verify_that_manager_id_is_displayed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Valid Login on the AUT",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User is on the Login Page of the Bank Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters correct user name \"\u003cname\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verify that manager Id is displayed on the Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "password"
      ]
    },
    {
      "cells": [
        "mngr285669",
        "mYpUnEz"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Valid Login on the AUT",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Login Page of the Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_the_login_page_of_the_bank_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct user name \"mngr285669\" and password \"mYpUnEz\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_correct_user_name_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that manager Id is displayed on the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verify_that_manager_id_is_displayed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});