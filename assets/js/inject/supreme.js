/**
 * @author Nyrres / nyrrespro@gmail.com
 * date: 2020-02-17
 * title: supreme
 */

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
                    if (settings.supreme_autofill == true) {
                        chrome.storage.sync.get({
                            'active_profile': []
                        }, (results) => {
                            profile = results.active_profile;
                            if (profile) {
                                var card_exp_date = profile.exp_date.includes("/") ? profile.exp_date.split("/") : null
                                var card_month = card_exp_date != null ? card_exp_date[0] : null
                                var card_year = card_exp_date != null ? card_exp_date[1] : null
                                var tabId = [
                                    ['order_billing_name', profile.first_name + " " + profile.last_name],
                                    ['order_email', profile.email],
                                    ['order_tel', profile.phone],
                                    ['bo', profile.adress],
                                    ['oba3', profile.adress_2],
                                    ['order_billing_city', profile.city],
                                    ['order_billing_zip', profile.postal_code],
                                    ['order_billing_state', profile.state],
                                    ['order_billing_country', profile.country_code],
                                    ['credit_card_type', profile.card_type],
                                    ['cnb', profile.card_number],
                                    ['credit_card_month', card_month],
                                    ['credit_card_year', card_year],
                                    ['vval', profile.card_cvv],
                                    ['orcer', profile.card_cvv],
                                    ['rnsnckrn', profile.card_number]

                                ];
                                autofill(tabId);
                            }
                        });
                    }
                }
            });


            function autofill(tabId) {
                for (var i = 0; i < tabId.length; i++) {
                    element = document.getElementById(tabId[i][0]);
                    if (element) {
                        element.focus();
                        if (tabId[i][0] == "order_billing_state" || tabId[i][0] == "order_billing_country" || tabId[i][0] == "credit_card_type" || tabId[i][0] == "credit_card_month" || tabId[i][0] == "credit_card_year") {
                            if (element.options != undefined)
                                for (var y = 0; y < element.options.length; y++) {
                                    element.options[y].selected = false;
                                    if (tabId[i][0] == "credit_card_year") {
                                        if (element.options[y].value == '20' + tabId[i][1])
                                            element.options[y].selected = true;
                                    } else {
                                        if (element.options[y].value == tabId[i][1])
                                            element.options[y].selected = true;
                                    }
                                }
                        } else {
                            if (tabId[i][1] != undefined && tabId[i][1].length > 0)
                                element.value = tabId[i][1];
                        }
                        element.blur();

                    }
                }
            }
        }
    });
});