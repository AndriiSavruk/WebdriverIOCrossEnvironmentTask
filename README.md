# Summary of repo # WebdriverIOCrossEnvironmentTask

Test core repo created to demonstrate the usage of WebdriverIO in action along with JavaScript in order to create cross environment for the project.

# System requirements:

Node.js 16x or higher.  
Windows 10 and above (64-bit only).  
macOS 10.9 and above (Intel or Apple Silicon 64-bit (x64 or arm64)).
Linux Ubuntu 20.04 and above, Fedora 21 and Debian 8 (x86_64 or Arm 64-bit (x64 or arm64))
 
# Steps to install:

1. Install locally web site from repo: https://github.com/cypress-io/cypress-realworld-app
2. Open the repo: https://github.com/AndriiSavruk/WebdriverIOCrossEnvironmentTask
3. Clone the repo
HTTP: https://github.com/AndriiSavruk/WebdriverIOCrossEnvironmentTask.git   
Github: ```git clone https://github.com/AndriiSavruk/WebdriverIOCrossEnvironmentTask```
4. Install NodeJS and NPM
5. Run a ``` npm install ``` in the project root

# Steps to launch:

for running the tests in the test environment:  
```npm run test```  
for running the tests in the test environment in chrome-browser:  
```npm run test:chrome```  
for running the tests in the test environment in firefox-browser:  
```npm run test:firefox```  
for running the tests in the prod environment:  
```npm run test:prod```  
for running the tests in the prod environment:  
```npm run test:develop```
 
# Steps to creating the report:
for creating html report:  
```npm run allure-report```
