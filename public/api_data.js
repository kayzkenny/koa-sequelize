define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "",
    "group": "Users",
    "name": "loginUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>user password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params :",
          "content": "{\n \"email\" : \"test@gmail.com\"\n \"password\" : \"password123\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Obj",
            "description": "<p>JWT Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Login-Success-Response :",
          "content": "HTTP/1.1 200k\n{\n \"token\" : \"onf2897408bf2308ygfb23874bf2\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/login",
        "type": "curl"
      }
    ],
    "description": "<p>login with user account details</p>",
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "",
    "group": "Users",
    "name": "signupUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>user password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Params :",
          "content": "{\n \"email\" : \"test@gmail.com\"\n \"password\" : \"password123\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Msg",
            "description": "<p>Signup Successful</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Signup-Success-Response :",
          "content": "HTTP/1.1 200k\n{\n \"msg\" : \"Signup Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/signup",
        "type": "curl"
      }
    ],
    "description": "<p>create new user account</p>",
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  }
] });
