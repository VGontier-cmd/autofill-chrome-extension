/**
 * @author Nyrres / nyrrespro@gmail.com
 * date: 2020-02-17
 * title: shopify-logs
 */

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
                    if (settings.shopify_autofill == true) {
                        //Test if the element is in the document
                        if (document.getElementsByClassName('os-order-number')[0] != undefined) {
                            if (document.getElementsByClassName('product__description__name order-summary__emphasis').length > 0) {
                                var product = document.getElementsByClassName('product__description__name order-summary__emphasis')[0].textContent;
                                var price = document.getElementsByClassName('total-recap__final-price')[0].textContent;
                                var image_url = document.getElementsByClassName('product-thumbnail__image')[0].src;
                                var site = document.location.origin;
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
                            }
                        }
                    }
                }
            });
        }
    });
});