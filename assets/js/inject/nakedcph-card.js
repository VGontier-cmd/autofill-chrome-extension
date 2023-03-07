/**
 * @author Nyrres / nyrrespro@gmail.com
 * date: 2020-04-13
 * title: nakedcph-card
*/


window.addEventListener('load', function () {
    chrome.storage.sync.get({
        'autofill_enabled': true
    }, (results) => {
        //Check if there is an active profile
        if (results.autofill_enabled != undefined && results.autofill_enabled == true) {
            //Check if the autofill is enabled
    
            chrome.storage.sync.get({
                'settings': {}
            }, (results) => {
                var settings = results.settings;
                if (settings) {
                    if (settings.shopify_autofill == true) {
                        //Get the active profile
                        chrome.storage.sync.get({
                            'active_profile': []
                        }, (results) => {
                            var profile = results.active_profile;
                            //Request to the autofill function if the active profile exist !!!Shopify Autofill enabled!!!
                            if (profile) {
                                autofill('card.cardNumber', profile.card_number)
                                autofill('card.cardHolderName', profile.card_name)
                                autofill('card.expiryMonth', profile.card_month)
                                autofill('card.expiryYear',profile.card_year)
                                autofill('card.cvcCode',profile.card_cvv)
                            }
                        });
                    }
                }
            });
        }
    });
});


function autofill(id, value) {
    setTimeout(() => {
        var elementId = document.getElementById(id);

        if (elementId) {
            if (value) {
                elementId.focus();
                if (elementId.options != undefined)
                    for (var y = 0; y < elementId.options.length; y++) {
                        elementId.options[y].selected = false;
                        if (id == "card.expiryYear") {
                            if (elementId.options[y].value == '20' + value)
                                elementId.options[y].selected = true;
                        } else {
                            if (elementId.options[y].value == value)
                                elementId.options[y].selected = true;
                        }
                    }
                else 
                    elementId.value = value;
                    
                elementId.dispatchEvent(new Event('change'));
                elementId.blur();
            }

        }

    }, 10)
}