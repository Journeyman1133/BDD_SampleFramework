$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 3,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@loginPage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify Invalid Login for Multiple Users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I enter \u003cusername\u003e into username text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \u003cpassword\u003e into password text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify the invalid credentials",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;1"
    },
    {
      "cells": [
        "unalaby@gmail.com",
        "test123"
      ],
      "line": 18,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;2"
    },
    {
      "cells": [
        "ammar@gmail.com",
        "test456"
      ],
      "line": 19,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;3"
    },
    {
      "cells": [
        "unal@gmail.com",
        "123test"
      ],
      "line": 20,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5894608035,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 325114473,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify Invalid Login for Multiple Users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginPage"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter unalaby@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter test123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify the invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "unalaby@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 31
    }
  ],
  "location": "LoginPageSD.enterDataAndPass(String,String)"
});
formatter.result({
  "duration": 166958844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterDataAndPass(String,String)"
});
formatter.result({
  "duration": 103237833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login button",
      "offset": 11
    }
  ],
  "location": "LoginPageSD.clickOnButton(String)"
});
formatter.result({
  "duration": 113478686,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 5208738462,
  "status": "passed"
});
formatter.after({
  "duration": 155271855,
  "status": "passed"
});
formatter.before({
  "duration": 3348437918,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 36354885,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify Invalid Login for Multiple Users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginPage"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter ammar@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter test456 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify the invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ammar@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 29
    }
  ],
  "location": "LoginPageSD.enterDataAndPass(String,String)"
});
formatter.result({
  "duration": 181917967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test456",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterDataAndPass(String,String)"
});
formatter.result({
  "duration": 115693480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login button",
      "offset": 11
    }
  ],
  "location": "LoginPageSD.clickOnButton(String)"
});
formatter.result({
  "duration": 107413178,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 23415172082,
  "status": "passed"
});
formatter.after({
  "duration": 171663436,
  "status": "passed"
});
formatter.before({
  "duration": 3100304482,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 11807854,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify Invalid Login for Multiple Users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginPage"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter unal@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter 123test into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify the invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "unal@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 28
    }
  ],
  "location": "LoginPageSD.enterDataAndPass(String,String)"
});
formatter.result({
  "duration": 141837220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123test",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterDataAndPass(String,String)"
});
formatter.result({
  "duration": 92109373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login button",
      "offset": 11
    }
  ],
  "location": "LoginPageSD.clickOnButton(String)"
});
formatter.result({
  "duration": 82526617,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 11358401740,
  "status": "passed"
});
formatter.after({
  "duration": 160565916,
  "status": "passed"
});
formatter.uri("Messenger.feature");
formatter.feature({
  "line": 2,
  "name": "Messenger Page Feature",
  "description": "",
  "id": "messenger-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 2954795315,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Messenger Page",
  "keyword": "Given "
});
formatter.match({
  "location": "MessengerPageSD.setMessengerPage()"
});
formatter.result({
  "duration": 1491210554,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify invalid login from messenger page",
  "description": "",
  "id": "messenger-page-feature;verify-invalid-login-from-messenger-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@messenger"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter unalaby@gmail.com into username field on Messenger Page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter test123 into password field on Messenger Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button on Messenger Page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify invalid login message on sign in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "unalaby@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 31
    }
  ],
  "location": "MessengerPageSD.enterDataIntoTextFile(String,String)"
});
formatter.result({
  "duration": 341663245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "MessengerPageSD.enterDataIntoTextFile(String,String)"
});
formatter.result({
  "duration": 50614230,
  "status": "passed"
});
formatter.match({
  "location": "MessengerPageSD.clickOnSignInButton()"
});
formatter.result({
  "duration": 3756775430,
  "status": "passed"
});
formatter.match({
  "location": "MessengerPageSD.verifySignInErrorMessage()"
});
formatter.result({
  "duration": 40285339,
  "status": "passed"
});
formatter.after({
  "duration": 138104130,
  "status": "passed"
});
});