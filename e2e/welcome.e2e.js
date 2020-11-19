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

    //click the button and wait until the tabs show
    await element(by.id(TEST_IDS.WELCOME.BUTTON)).tap();
    await waitFor(element(by.id(TEST_IDS.NAV.TABS.FEED)))
      .toBeVisible()
      .withTimeout(2000);

    //check the tabs are showing and wait for the cards to load
    await expect(element(by.id(TEST_IDS.NAV.TABS.FEED))).toBeVisible();
    await expect(
      element(by.id(TEST_IDS.THINGS.CONTAINER)).atIndex(0),
    ).toBeVisible();
    await expect(
      element(by.id(TEST_IDS.THINGS.DETAILS.BUTTON)).atIndex(0),
    ).toBeVisible();

    //click into the first card and then click back
    await element(by.id(TEST_IDS.THINGS.DETAILS.BUTTON)).atIndex(0).tap();
    //predefined ID for the header back control
    await element(by.id('header-back')).tap();
  });
});
