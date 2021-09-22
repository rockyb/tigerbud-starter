/* eslint-env detox/detox */
const {TEST_IDS} = require('../src/constants');

describe('Basics', () => {
  it('should have welcome screen', async () => {
    await expect(element(by.id(TEST_IDS.WELCOME.CONTENT))).toBeVisible();
  });

  it('should show tabs after welcome click', async () => {
    //wait for the welcome content
    await waitFor(element(by.id(TEST_IDS.WELCOME.CONTENT)))
      .toBeVisible()
      .withTimeout(2000);
    await element(by.id(TEST_IDS.WELCOME.BUTTON)).tap();
    await waitFor(element(by.id(TEST_IDS.NAV.TABS.FEED)))
      .toBeVisible()
      .withTimeout(2000);
  });

  it('should  start navigation Bottom click and back to feed ', async () => {
    await expect(element(by.id(TEST_IDS.NAV.TABS.FEED))).toBeVisible();
    await element(by.id(TEST_IDS.NAV.TABS.LOGIN)).atIndex(0).tap();
    await element(by.id(TEST_IDS.NAV.TABS.STORYBOOK)).atIndex(0).tap();
    await element(by.id(TEST_IDS.NAV.TABS.FEED)).atIndex(0).tap();
  });

  it('should click details button', async () => {
    await expect(
      element(by.id(TEST_IDS.THINGS.DETAILS.BUTTON)).atIndex(0),
    ).toBeVisible();
    await element(by.id(TEST_IDS.THINGS.DETAILS.BUTTON)).atIndex(0).tap();
    await element(by.id(TEST_IDS.THINGS.FEED.BUTTON)).atIndex(0).tap();
  });

  it('should start  check Login links ', async () => {
    //Start login auth
    await element(by.id(TEST_IDS.NAV.TABS.LOGIN)).atIndex(0).tap();
    await expect(element(by.id(TEST_IDS.NAV.TABS.LOGIN))).toBeVisible();
    await element(by.id(TEST_IDS.AUTH.SIGN_UP_BUTTON)).tap();
    await element(by.id(TEST_IDS.AUTH.CONFIRM_A_CODE_BUTTON)).tap();
    await element(by.id(TEST_IDS.AUTH.BACK_TO_SIGN_IN_BUTTON)).tap();
  });
});

describe('Login flow', () => {
  it('should fill the e-mail', async () => {
    await element(by.id(TEST_IDS.AUTH.USERNAME_INPUT)).typeText(
      'juliana.leon@tigerspike.com',
    );
  });
  it('should fill the password', async () => {
    await element(by.id(TEST_IDS.AUTH.PASSWORD_INPUT)).typeText('Amelie2009');
  });
  it('should tap login button', async () => {
    await element(by.id(TEST_IDS.AUTH.SIGN_IN_BUTTON)).tap();
  });

  it('check THINGS PAGE', async () => {
    await element(by.id(TEST_IDS.THINGS.EDIT.BUTTON)).toBeVisible();
    await element(by.id(TEST_IDS.THINGS.EDIT.BUTTON)).atIndex(0).tap();
  });
});
