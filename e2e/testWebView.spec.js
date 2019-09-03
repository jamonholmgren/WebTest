describe('WebView basic test', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a webview', async () => {
    await expect(element(by.id('test_webview'))).toBeVisible();
  });

  it('should respond to injectJavaScript', async () => {
    const hello = await element(by.id('hello'));
    await expect(hello).toHaveText('No hello yet');
    await element(by.id('test_trigger_button')).tap();
    await waitFor(hello)
      .toHaveText('Hello from the webview!')
      .withTimeout(2000);
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
