const dropdownListSelector = "table[class='listTable']";
describe('Title Editor Login', function () {
  before(browser => browser.navigateTo('http://127.0.0.1:8107/titleeditor.html'));

  it('Test Title Editor', function (browser) {

    const loginPageHeaderElement = "td[class='loginHeaderLabel']";
    const pageTitleSelector = "td[class='pageTitle']";
    const topNavigationSelector = "div[class='headerNavigation']"

    browser
      .window.maximize()
      .waitForElementVisible('body')
      .assert.titleContains('Title Editor')
      .assert.textContains("td[class='homeLoginButton']", "Log in now >")
      .click("td[class='homeLoginButton']")
      .waitForElementVisible(loginPageHeaderElement)
      .assert.textContains(loginPageHeaderElement, "Log in")
      .perform(function () {
        browser.element().findByLabelText('Password').setValue("70_russia_QUICKLY_study_40")
      })
      .perform(function () {
        browser.element().findByLabelText('Username').setValue("devAdmin")
      })
      .perform(function () {
        browser.element("td[class='loginButton']").click()
      })
      .waitForElementVisible(pageTitleSelector)
      .assert.textContains("div[class='searchHeader']", "Quick Searches")
      .perform(function () {
        browser.element(By.xpath("//*[text()='Add Book']")).click();
      })
      .assert.textContains("td[class='contentHeaderStyle']", "Add a new book record")
      .perform(function () {
        browser.element().findByLabelText('Please enter the ISBN13 of the book to add').setValue("9783046411528")
      })
      .perform(function () {
        browser.element(By.xpath("//*[ contains (text(), 'Easy Add' ) ]")).click();
        browser.waitForElementVisible(By.xpath("//*[ contains (text(), 'Welcome to Easy Add Book' ) ]"))
        browser.element("img[class='comboBoxItemPickerLite']").click();
      })
      // .perform(function () {
        
      // })
      .waitForElementVisible(dropdownListSelector)
      .perform(function () {
        browser.element(By.xpath("//*[text()='Comma Press']")).click();
        console.log("Selected Comma Press ")
      })
      .perform(function () {
        browser.element(By.xpath("//*[text()='Easy Add Book\u00a0\u00a0>']")).click();
        console.log("Easy Add Book clicked ")
      })
      .perform(function () {
        browser.selectDrowndownValueViaHorizontalLabel('Publication Status','Active')
        console.log("Operation on: Publication Status")
      })
      .perform(function () {
        browser.moveBackOneYearUsingCalendarButtonViaHorizontalLabel("Date of Publication")
      })
      
      
      .assert.textContains("div[class='fake']", "Does not exist")






    //browser



    //
    //
    //


  });

  //after(browser => browser.end());
});