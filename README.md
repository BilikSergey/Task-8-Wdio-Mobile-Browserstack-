# Task-8-Wdio-Mobile-Browserstack-
Repo is dedicated for testing mobile app.
## Requirements
Among requirements are downloading .apk, installing node.JS, faker, any code editor, appium inspector and allure.

## Setup

- Install any code editor (VS Code) or IDE

- Install appium inspector

- Install node.js 22.13.1

- Clone the project:

```bash
git clone https://github.com/BilikSergey/Task-8-Wdio-Mobile-Browserstack-.git
```

- Install dependencies:

```bash
npm install
```

- Install wdio

```bash
npm init wdio@latest .
```

- Install allure.

```bash
npm install @wdio/allure-reporter --save-dev
```

- Install faker.

```bash
npm install @faker-js/faker
```

## Run tests
Run all tests in headless mode: 
```bash
test
```
Run single test
```bash
test:login.e2e
```
```bash
test:drag.e2e
```
```bash
test:form.e2e
```
Run all tests with Samsung device:
```bash
test:samsung
```
Run tests with redmi device:
```bash
test:redmi
```
## Create a report
```bash
report
```
