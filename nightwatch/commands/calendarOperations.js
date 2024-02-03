const calenderPopupSelector = "table[class='listTable']";
const backOneYearButtonImage = "doubleArrow_left.png";
const forwardOneYearButtonImage = "doubleArrow_right.png";
const backOneMonthButtonImage = "arrow_left.png";
const forwardOneMonthButtonImage = "arrow_right.png";


module.exports = class moveBackOneYearUsingCalendarButtonViaHorizontalLabel {
    async command(label) {

      try {
        const labelElementsParent = browser.element(By.xpath("//*[ contains (text(), '" +  label + "' ) ]/ancestor::tr"))
        labelElementsParent.find("img").click()
        browser.waitForElementVisible(calenderPopupSelector)
        const calendarElement = browser.element(calenderPopupSelector)
        const backOneYear = calendarElement.find(By.xpath("//img[contains(@src, '"+ backOneYearButtonImage +"')]"));
        backOneYear.click();
        

      } catch (err) {
        console.log('An error occurred', err);
        returnValue = {
          status: -1,
          error: err.message
        }
      }
      
      return Promise.resolve();
    }
  }