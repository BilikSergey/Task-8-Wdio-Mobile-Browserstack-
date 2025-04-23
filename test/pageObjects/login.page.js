//@ts-check
/// <reference types="@wdio/globals/types" />

class LoginPage {
  get loginPageButton() {
    return $('//android.widget.Button[@content-desc="Login"]');
  }

  get loginContainerButton() {
    return $(
      '//android.view.ViewGroup[@content-desc="button-login-container"]/android.view.ViewGroup'
    );
  }

  get signUpButton() {
    return $('//android.widget.TextView[@text="Sign up"]');
  }

  get emailInput() {
    return $('//android.widget.EditText[@content-desc="input-email"]');
  }

  get passwordInput() {
    return $('//android.widget.EditText[@content-desc="input-password"]');
  }

  get passwordConfirmInput() {
    return $(
      '//android.widget.EditText[@content-desc="input-repeat-password"]'
    );
  }

  get submitButton() {
    return $(
      '//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup'
    );
  }

  get submitLoginButton() {
    return $(
      '//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup'
    );
  }

  get messageWrongEmail() {
    return $(
      '//android.widget.TextView[@text="Please enter a valid email address"]'
    );
  }

  get messageWrongPassword() {
    return $(
      '//android.widget.TextView[@text="Please enter at least 8 characters"]'
    );
  }

  async clickLoginPageButton() {
    await this.loginPageButton.click();
  }

  async clickLoginContainerButton() {
    await this.loginContainerButton.click();
  }

  async clickSubmitLoginButton() {
    await this.submitLoginButton.click();
  }

  async enterSignUpData({ email, password, passwordConfirm }) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    if (passwordConfirm !== false) {
      await this.passwordConfirmInput.setValue(passwordConfirm);
      await this.submitButton.click();
    } else {
      await this.submitLoginButton.click();
    }
  }
}

export default new LoginPage();
