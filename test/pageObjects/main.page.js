class MainPage {
  get successfulMessage() {
    return $('//android.widget.TextView[@resource-id="android:id/message"]');
  }

  get okButton() {
    return $('//android.widget.Button[@resource-id="android:id/button1"]');
  }

  async clickOkButton() {
    await this.okButton.click();
  }
}

export default new MainPage();
