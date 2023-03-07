/**
 * @author Nyrres / nyrrespro@gmail.com
 * date: 2020-02-17
 * title: shopify
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
                                var tabId = [
                                    ['checkout_email', profile.email],
                                    ['checkout_email_or_phone', profile.email],
                                    ['checkout[email_or_phone]', profile.email],
                                    ['checkout[email]', profile.email],
                                    ['checkout_shipping_address_first_name', profile.first_name],
                                    ['checkout_shipping_address_last_name', profile.last_name],
                                    ['checkout_shipping_address_address1', profile.adress],
                                    ['checkout_shipping_address_address2', profile.adress_2],
                                    ['checkout_shipping_address_city', profile.city],
                                    ['checkout_shipping_address_country', profile.country],
                                    ['checkout_shipping_address_province', profile.state],
                                    ['checkout_shipping_address_zip', profile.postal_code],
                                    ['checkout_shipping_address_phone', profile.phone],
                                    ['checkout_billing_address_first_name', profile.first_name],
                                    ['checkout_billing_address_last_name', profile.last_name],
                                    ['checkout_billing_address_address1', profile.adress],
                                    ['checkout_billing_address_address2', profile.adress_2],
                                    ['checkout_billing_address_city', profile.city],
                                    ['checkout_billing_address_country', profile.country],
                                    ['checkout_billing_address_province', profile.state],
                                    ['checkout_billing_address_zip', profile.postal_code],
                                    ['checkout_billing_address_phone', profile.phone]
                                ];
                                autofill(tabId);
                                //Click on the captcha and on the submit button !!!Shopify ACO enabled!!!
                                if (settings.shopify_aco == true)
                                    setTimeout(() => {
                                        var captcha = document.getElementById('g-recaptcha');
                                        var submit = document.getElementById('continue_button');
                                        if (!captcha) {
                                            if (submit)
                                                submit.click();
                                        } else
                                            captcha.click();

                                    }, 200)
                            }
                        });

                        //Autofill function
                        function autofill(tabId) {
                            for (var i = 0; i < tabId.length; i++) {
                                elementId = document.getElementById(tabId[i][0]);
                                elementName = document.getElementsByName(tabId[i][0])[0];
                                var elements = new Array(elementId, elementName)
                                elements.forEach(element => {
                                    if (element) {
                                        element.focus();
                                        if (tabId[i][0] == "checkout_shipping_address_province" || tabId[i][0] == "checkout_shipping_address_country") {
                                            if (element.options != undefined)
                                                for (var y = 0; y < element.options.length; y++) {
                                                    element.options[y].selected = false;
                                                    if (element.options[y].value == tabId[i][1]) {
                                                        element.options[y].selected = true;

                                                    }
                                                }
                                        } else {
                                            if (tabId[i][1] != undefined && tabId[i][1].length > 0) {
                                                element.value = tabId[i][1];
                                            }

                                        }
                                        element.dispatchEvent(new Event('change'));
                                        element.blur();
                                    }
                                })

                            }
                        }
                    }
                }
            });
        }
    });
});