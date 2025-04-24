//@ts-check
import formPage from "../pageObjects/form.page.js";
import mainPage from "../pageObjects/main.page.js";
import testData from "../../data/testData.json";

describe("Mobile Form Test", () => {
  it("Fill Form", async () => {
    await formPage.clickFormButton();
    await formPage.fillTheForm(testData.typedInput);
    await mainPage.successfulMessage.waitForDisplayed({ timeout: 5000 });
    expect(await mainPage.successfulMessage.isDisplayed()).toBe(true);
    expect(await mainPage.okButton.isDisplayed()).toBe(true);
  });
});
