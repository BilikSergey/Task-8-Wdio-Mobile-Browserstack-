//@ts-check
import { faker } from "@faker-js/faker";
import loginPage from "../pageObjects/login.page.js";
import mainPage from "../pageObjects/main.page.js";

describe("Mobile Login Tests", () => {
  it("correct sign up", async () => {
    await loginPage.clickLoginPageButton();
    await loginPage.signUpButton.click();
    let password = faker.internet.password();
    await loginPage.enterSignUpData({
      email: faker.internet.email(),
      password,
      passwordConfirm: password,
    });
    await mainPage.successfulMessage.waitForDisplayed({ timeout: 5000 });
    expect(await mainPage.successfulMessage.isDisplayed()).toBe(true);
    expect(await mainPage.okButton.isDisplayed()).toBe(true);
  });

  it("correct login", async () => {
    await mainPage.clickOkButton();
    await loginPage.clickLoginContainerButton();
    await loginPage.clickSubmitLoginButton();
    await mainPage.successfulMessage.waitForDisplayed({ timeout: 5000 });
    expect(await mainPage.successfulMessage.isDisplayed()).toBe(true);
    expect(await mainPage.okButton.isDisplayed()).toBe(true);
  });

  it("incorrect login", async () => {
    await mainPage.clickOkButton();
    await loginPage.enterSignUpData({
      email: "",
      password: "",
      passwordConfirm: false,
    });
    await loginPage.messageWrongEmail.waitForDisplayed({ timeout: 5000 });
    expect(await loginPage.messageWrongEmail.isDisplayed()).toBe(true);
    expect(await loginPage.messageWrongPassword.isDisplayed()).toBe(true);
  });
});
