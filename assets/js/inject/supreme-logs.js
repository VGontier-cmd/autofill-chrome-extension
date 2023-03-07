/**
* @author Nyrres / nyrrespro@gmail.com
* date: 2020-02-17
* title: shopify-logs
*/

var alreadySend = false;
//Wait the page to load 
window.addEventListener('load', function () {

    //Check if the extension is enabled 
    chrome.storage.sync.get({
        'autofill_enabled': true
    }, (results) => {
        if (results.autofill_enabled != undefined && results.autofill_enabled == true) {
            chrome.storage.sync.get({
                'settings': {}
            }, (results) => {
                var settings = results.settings;
                if (settings) {
                    this.console.log(settings)
                    if (settings.supreme_autofill == true) {
                        checkPage();
                    }
                }
            });
        }
    });
});

function checkPage(){
    //Test if the element is in the document 
    setTimeout(()=>{
        if (document.getElementById('confirmation') != undefined && document.getElementById('order-mailinglist-form') != undefined && !alreadySend) {
            for(var i = 0 ; i< document.getElementsByTagName('table')[0].tBodies[0].rows.length-1; i++){
                var product = document.getElementsByClassName('cart-description')[i].textContent;
                var price = document.getElementsByClassName('checkout-price-spacer')[i].textContent;
                var image_url = "https://"+document.getElementsByClassName('cart-image')[i].childNodes[0].childNodes[0].src.split('//')[1]
                var site = "https://www.supremenewyork.com";
                jsonData = {
                    "action": "logs",
                    "product": product,
                    "price": price,
                    "image_url": image_url,
                    "site": site
                }
                chrome.runtime.sendMessage(
                    jsonData,
                    function (response) {
                        console.log(response.farewell)
                    }
                );
                alreadySend = true;
            }
        }
        checkPage();
    }, 3000)
    
}