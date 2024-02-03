


// module.exports = { 

//     clickBySelectorAndText : async function (browser,  selector, text){

//     const menuElements = browser.element.findAll(selector);
//     const menu = await menuElements;
//     for (let i = 0; i < menu.length; i++) {

//         menu[i].getText().then((label) => {

//             if (label === text) {
//                 menu[i].click();
//             }

//         })
//     } 
// }
// }

//  command: function(selector) {
//    return this
//      .waitForElementVisible(selector)
//      .click(selector);

module.exports = class clickBySelectorAndText {
    async command(selector, content) {

      try {
        const menu = await this.element.findAll(selector);
        for (let i = 0; i < menu.length; i++) {

            menu[i].getText().then((label) => {
    
                if (label === content) {
                    menu[i].click();
                }
    
            })
        } 
        

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