/**
 * @author Nyrres / nyrrespro@gmail.com
 * date: 2020-02-17
 * title: shopify-card
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
					if (settings.shopify_autofill == true) {
						chrome.storage.sync.get({
							'active_profile': []
						}, (results) => {
							profile = results.active_profile;
							if (profile) {
								autofill('number', profile.card_number);
								autofill('name', profile.card_name);
								autofill('expiry', profile.exp_date);
								autofill('verification_value', profile.card_cvv);
							}
						});

						function autofill(id, value) {
							let element = document.getElementById(id);
							if (element) {
								if (element.hasAttribute("data-honeypot-field")) return
								element.focus();
								element.value = value;
								element.blur();
							}
						}
					}
				}
			});
		}
	});
});