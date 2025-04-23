//@ts-check
/// <reference types="@wdio/globals/types" />

class FormPage {
  get formPageButton() {
    return $('//android.widget.TextView[@text="Forms"]');
  }

  get inputField() {
    return $('//android.widget.EditText[@content-desc="text-input"]');
  }

  get youTyped() {
    return $('//android.widget.TextView[@content-desc="input-text-result"]');
  }

  get switch() {
    return $('//android.widget.Switch[@content-desc="switch"]');
  }

  get dropDownMenu() {
    return $('//android.widget.EditText[@text="Select an item..."]');
  }

  get messageAboutAppium() {
    return $(
      '//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]'
    );
  }

  get dropDownMeniWithMessageAboutAppium() {
    return $('//android.widget.EditText[@text="Appium is awesome"]');
  }

  get activeButton() {
    return $(
      '//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup'
    );
  }

  async clickFormButton() {
    await this.formPageButton.click();
  }

  async fillTheForm(dataValue) {
    await this.inputField.setValue(dataValue);
    expect(this.youTyped).toHaveText(dataValue);
    await this.switch.click();
    expect(await this.switch.getAttribute("checked")).toBe("true");
    await this.dropDownMenu.click();
    await this.messageAboutAppium.click();
    expect(await this.dropDownMeniWithMessageAboutAppium.isDisplayed()).toBe(
      true
    );
    await this.activeButton.click();
  }
}

export default new FormPage();
