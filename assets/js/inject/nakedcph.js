/**
 * @author Nyrres / nyrrespro@gmail.com
 * date: 2020-04-13
 * title: nakedcph
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
                    if (settings.naked_script == true) {
                        //Autofill if 
                        if(window.location.href.includes("cart/view")){
                            chrome.storage.sync.get({
                                'active_profile': null
                            }, (results) => {
                                var profile = results.active_profile;
                                if (profile != null) {
                                    autofill("emailAddress", profile.email);
                                    autofill("postalCodeQuery", profile.postal_code)
                                    autofill("firstName",profile.first_name)
                                    autofill("lastName", profile.last_name)
                                    autofill("addressLine2",profile.adress)
                                    autofill("addressLine3",profile.adress_2)
                                    autofill("postalCode",profile.postal_code)
                                    autofill("city",profile.city)
                                    autofill("phoneNumber",profile.phone)
                                }
                            });
                        }

                        //Click on the button
                        getSize().then(()=>{
                            //Add the size to cart
                            clickElement('product-form-submit', 0, 100)
                            //Click on the checkout button 
                            clickElement('btn-primary',2,800);
                            //Click on the second button 
                            clickElement('continue-btn continue-btn--email btn btn-primary btn-lg', 0, 1000)
                        });
                    }
                }
            });
        }
    });


    async function getSize(){
        chrome.storage.sync.get({ 'naked_size': null}, (results) => {
            if(results.naked_size != null){
                var elements = document.getElementsByClassName('dropdown-item');
                for(var i = 0; i< elements.length; i++){
                    if(!elements[i].className.includes("disabled") && elements[i].href == (window.location.href +"#") ){
                            if(elements[i].textContent.replace(/\s/g, '') == results.naked_size.replace(/\s/g, '')){
                                elements[i].click();
                                return Promise;
                            }
                    }
                }
            }
            
        });
        
    }


    function autofill(id, value) {
        setTimeout(() => {
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
});

function clickElement(elementName, place, time){
    setTimeout(()=>{
        var element = document.getElementsByClassName(elementName)[place]
        if (element)
            element.click();
    },time);
}