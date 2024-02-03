const dropdownListSelector = "table[class='listTable']";


module.exports = class selectDrowndownValueViaHorizontalLabel {
    async command(label,value) {

      try {
        const labelElement = browser.element(By.xpath("//*[ contains (text(), '" + label + "' ) ]/ancestor::tr"))
        labelElement.find("td[class='comboBoxItemPickerCell']").click()
        browser.waitForElementVisible(dropdownListSelector)
        const dropDownListElement = browser.element(dropdownListSelector)
        dropDownListElement.find(By.xpath("//*[text()='" + value + "']")).click();
        browser.expect.element(dropdownListSelector).to.not.be.visible;        

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