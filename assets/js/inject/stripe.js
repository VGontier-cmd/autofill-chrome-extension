/**
 * @author Nyrres / nyrrespro@gmail.com
 * date: 2020-02-17
 * title: stripe
 */

if (!window.location.href.includes("checkouts") &&  !window.location.href.includes("supremenewyork") && !window.location.href.includes("naked")) {
    window.addEventListener('load', function () {
        chrome.storage.sync.get({
            'autofill_enabled': true
        }, (results) => {
            if (results.autofill_enabled != undefined && results.autofill_enabled == true) {

                chrome.storage.sync.get({
                    'settings': {}
                }, (results) => {
                    var settings = results.settings;
                    if (settings) {
                        if (settings.stripe_autofill == true) {
                            chrome.storage.sync.get({
                                'active_profile': []
                            }, (results) => {
                                let profile = results.active_profile
                                if (profile) {
                                    //Shipping details
                                    autofill('name', profile.first_name + " " + profile.last_name)
                                    autofill('fullName', profile.first_name + " " + profile.last_name)
                                    autofill('email', profile.email)
                                    autofill('email_address', profile.email)
                                    autofill('tel', profile.phone)
                                    autofill('phone', profile.phone)
                                    autofill('address', profile.adress)
                                    autofill('billingAddressLine1',profile.adress)
                                    autofill('billingAddressLine2',profile.adress_2)
                                    autofill('state', profile.state_code)
                                    autofill('city', profile.city)
                                    autofill('billingLocality', profile.city)
                                    autofill('postal_code', profile.postal_code)
                                    autofill('billingPostalCode',profile.postal_code)
                                    //Card details
                                    autofill('billingName',profile.card_name)
                                    autofill('cvc', profile.card_cvv)
                                    autofill('cardCvc',profile.card_cvv)
                                    autofill('exp-date', profile.exp_date)
                                    autofill('cardExpiry',profile.exp_date)
                                    autofill('cardnumber', profile.card_number)
                                    autofill('cardNumber', profile.card_number)

                                    //Postal code for credit card details 
                                    autofill('postal', profile.postal_code)
                                }
                            });
                        }
                    }
                });
            }
        });
    })
}


function autofill(id, value) {
    setTimeout(() => {
        elements = document.querySelectorAll('input');
        elements.forEach(element => {
            if (value) {
                if (element.className.includes("fake")) return;
                if (element.value.length == 0) {
                    if (element.dataset.tid) {
                        if (element.dataset.tid.includes(id)) {
                            element.value = value;
                        }
                    } else if (element.autocomplete.includes(id))
                        element.value = value;
                    else if (element.id.includes(id))
                        element.value = value;
                }
            }
        });
        var elementId = document.getElementById(id);
        var elementName = document.getElementsByName(id)[0];

        if (elementId) {
            if (value) {
                elementId.focus();
                elementId.value = value;
                elementId.dispatchEvent(new Event('change'));
                elementId.blur();
            }

        }

        if (elementName) {
            if (value) {
                elementName.focus()
                elementName.value = value;
                elementName.dispatchEvent(new Event('change'));
                elementName.blur();
            }
        }

    }, 10)
}