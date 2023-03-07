/**
 * @author VGontier / gontiervivien@gmail.com
 * date: 2020-02-17
 * title: dashboard
 */


//Close the tabs if not logged with discord 
chrome.storage.sync.get({
    'userInformations': null
}, (results) => {
    results.userInformations.username ? null :
        chrome.tabs.getCurrent(function (tab) {
            chrome.tabs.remove(tab.id, function () {});
        });
});


/*------------------------
    Informations  Part
------------------------*/

const defaultProfile = {
    first_name: "Cook",
    last_name: "Beast",
    email: "cookbeast@gmail.com",
    phone: "0235167847",
    adress: "23st of Liberty",
    adress_2: "APT #45",
    postal_code: "78909",
    city: "Paris",
    country_code: "FR",
    country: "France",
    state_code: "No state",
    state: "No state",
    card_name: "COOK",
    card_number: "1234123412341234",
    card_cvv: "999",
    exp_date: "01/19",
    card_type: "visa",
    profile_name: "default profile"
}

//Add event on different buttons
var infosPart = document.getElementById('infos');
var settingsPart = document.getElementById('settings');

var infosBtn = document.getElementById('information-btn');
var settingsBtn = document.getElementById('settings-btn');

infosBtn.addEventListener("click", function () {
    settingsPart.style.display = "none";
    infosPart.style.display = "block";
});

settingsBtn.addEventListener("click", function () {
    settingsPart.style.display = "block";
    infosPart.style.display = "none";
});

document.getElementById("btn-save-profile").addEventListener("click", getFormInformations, false);
document.getElementById("btn-load-profile").addEventListener("click", loadProfile, false);
document.getElementById("btn-delete-profile").addEventListener("click", deleteProfile, false);
document.getElementById("btn-active-profile").addEventListener("click", saveActiveProfile, false);


//Add profile names to each select 
var loadProfile = document.getElementById("load-profile");
var deleteProfile = document.getElementById("delete-profile");
var activeProfile = document.getElementById("active-profile");
chrome.storage.sync.get({
    'profiles': []
}, (results) => {
    if (results.profiles != undefined) {
        for (var i = 0; i < results.profiles.length; i++) {
            if (results.profiles[i] != null) {
                var option1 = document.createElement("option");
                var option2 = document.createElement("option");
                var option3 = document.createElement("option");
                option1.text = results.profiles[i].profile_name;
                option2.text = results.profiles[i].profile_name;
                option3.text = results.profiles[i].profile_name;
                deleteProfile.options.add(option1)
                loadProfile.options.add(option2)
                activeProfile.options.add(option3)
            }
        }
    }
});



//Get form informations when button onclick
async function getFormInformations() {
    var jsonData = {};
    var el = document.getElementsByClassName("to-save");
    for (var i = 0; i < el.length; i++) {
        var data = el[i];
        if (data.value != undefined) {
            if (data.name == "country" || data.name == "state") {
                if (data.name == "country"){
                    if(console.log(document.getElementById("fill-" + data.name).selectedIndex) != -1)
                        var element = document.getElementById("fill-" + data.name).options[document.getElementById("fill-" + data.name).selectedIndex].getAttribute('code');
                }
                else{
                    if(console.log(document.getElementById("fill-" + data.name).selectedIndex) != -1)
                        var element = document.getElementById("fill-" + data.name).options[document.getElementById("fill-" + data.name).selectedIndex].text;
                }
                    
                if (element)
                    jsonData[data.name + '_code'] = element;
            }

            jsonData[data.name] = data.value;
        }
    }
    //test if profile-name is not empty 
    if (jsonData.profile_name)
        saveInformations(jsonData);
    else {
        $.notify("The profile name cannot be empty !", "error");
        reloadTab(3000)
    }


}

//Save informations on a profile after getting forms informations 
function saveInformations(data) {
    console.log(data)
    var exist = false;
    chrome.storage.sync.get({
        'profiles': [defaultProfile]
    }, (results) => {
        if (results.profiles.length > 0) {
            for (var i = 0; i < results.profiles.length; i++) {
                if (results.profiles[i]['profile_name'] == data['profile_name']) {
                    exist = true;
                    results.profiles[i] = data;
                }
            }
            if (!exist) {
                results.profiles.push(data);
            }
        } else {
            results.profiles = new Array();
            results.profiles.push(data)
        }
        chrome.storage.sync.set({
            'profiles': results.profiles
        });

        $.notify(data.profile_name + " as been created with success !", "success");
        reloadTab(3000)

        //Modify the active profile if they have the same profile_name 
        chrome.storage.sync.get({
            'active_profile': []
        }, (results) => {
            var profile = results.active_profile;
            if (profile) {
                if (profile.profile_name == data['profile_name']) {
                    chrome.storage.sync.set({
                        'active_profile': data
                    });
                    $.notify("The active profile has been updated with success !", "success");
                }
            }
        });
    });
}



//Load informations of the selected profile 
function loadProfile() {
    var profileName = $("#load-profile option:selected").text();
    var data = {};
    if (profileName && profileName.length > 0) {
        chrome.storage.sync.get({
            'profiles': []
        }, (results) => {
            for (var i = 0; i < results.profiles.length; i++) {
                if (results.profiles[i]['profile_name'] == profileName) {
                    data = results.profiles[i];
                }
            }
            autofill("first_name", data.first_name);
            autofill("last_name", data.last_name);
            autofill("email", data.email);
            autofill("phone", data.phone);
            autofill("adress", data.adress);
            autofill("adress_2", data.adress_2);
            autofill("postal_code", data.postal_code);
            autofill("city", data.city);
            autofill("country", data.country);
            autofill("state", data.state, data.country);
            autofill("card_name", data.card_name);
            autofill("card_number", data.card_number);
            autofill("card_cvv", data.card_cvv);
            autofill("exp_date", data.exp_date);
            autofill("card_type", data.card_type);
            autofill("profile_name", data.profile_name);

            $.notify(data.profile_name + " as been loaded with success !", "success");
        });
    }

}

//Autofill the document element with and id and data 
async function autofill(id, data, country) {
    
    if(country){
        displayStates(country)
        setTimeout(()=>{
            document.getElementById('fill-state').value = data;
        },1000)
    }
    else 
        (data && data.length > 0) ? document.getElementById("fill-" + id).value = data: document.getElementById("fill-" + id).value = "";
}


function deleteProfile() {
    var profileName = $("#delete-profile option:selected").text();
    chrome.storage.sync.get({
        'profiles': []
    }, (results) => {
        for (var i = 0; i < results.profiles.length; i++) {
            if (results.profiles[i]['profile_name'] == profileName) {
                results.profiles.splice(i, 1);
            }
        }
        chrome.storage.sync.set({
            'profiles': results.profiles
        });

        $.notify(profileName + " as been deleted with success !", "success");
        reloadTab(3000)

        //delete the active profile if they have the same profile_name 
        chrome.storage.sync.get({
            'active_profile': []
        }, (results) => {
            var profile = results.active_profile;
            if (profile) {
                if (profile.profile_name == profileName) {
                    chrome.storage.sync.set({
                        'active_profile': null
                    });
                    $.notify("The active profile has been deleted with success !", "success");
                }
            }
        });
    });
}

function saveActiveProfile() {
    var profileName = $("#active-profile option:selected").text();
    chrome.storage.sync.get({
        'profiles': []
    }, (results) => {
        for (var i = 0; i < results.profiles.length; i++) {
            if (results.profiles[i]['profile_name'] == profileName) {
                chrome.storage.sync.set({
                    'active_profile': results.profiles[i]
                });
                $.notify(profileName + " as been put as a default profile with success !", "success");
            }
        }
    });

}


/*----------------
    Settings Part
-----------------*/

//Add event(s) on the settings buttons 
document.getElementById("btn-settings").addEventListener("click", getSettings, false);
//get settings parameters and save them
function getSettings() {
    var jsonData = {};
    var el = document.getElementsByClassName("to-save-settings");
    for (var i = 0; i < el.length; i++) {
        var data = el[i];
        jsonData[data.name] = (data.name == "success_webhook") ? data.value : data.checked;
    }
    chrome.storage.sync.set({
        'settings': jsonData
    });
    //Save the size 
    var size = document.getElementById("size-selector").options[document.getElementById("size-selector").selectedIndex].text
    chrome.storage.sync.set({
        'naked_size': size
    });

    $.notify("Your settings have been successfully saved !", "success")
}

//autofill settings parameters 
chrome.storage.sync.get({
    'settings': []
}, (results) => {
    results = results.settings;
    autofillSettings("shopify-autofill", results.shopify_autofill)
    autofillSettings("share-success", results.share_success)
    autofillSettings("supreme-autofill", results.supreme_autofill)
    autofillSettings("shopify-aco", results.shopify_aco)
    autofillSettings("stripe-autofill", results.stripe_autofill)
    autofillSettings("success-webhook", results.success_webhook)
    autofillSettings("naked-script", results.naked_script)
});

//autofill size
chrome.storage.sync.get({
    'naked_size': null
}, (results) => {
    if (results.naked_size != null) {
        var select = document.getElementById("size-selector");
        for (var i = 0; i < select.options.length; i++) {
            if (select.options[i].text == results.naked_size) {
                select.options[i].selected = true;
            }
        }
    }
});

//check automatically settings checkboxs 
function autofillSettings(id, data) {
    if (data) {
        var element = document.getElementById("fill-" + id);
        if (element)
            (id == "success-webhook") ? document.getElementById("fill-" + id).value = data : document.getElementById("fill-" + id).checked = true;
    }
}


function reloadTab(time) {
    setTimeout(() => {
        chrome.tabs.reload()
    }, time)
}


/*----------------
    Other Part
-----------------*/

//Logout button
document.getElementById('logout-btn').addEventListener('click', (event) => {
    chrome.storage.sync.get({
        'userInformations': null
    }, (results) => {
        if (results.userInformations) {
            chrome.storage.sync.set({
                'userInformations': null
            })
            $.notify("You're now logged out ", "success")
            setTimeout(() => {
                chrome.tabs.getCurrent(function (tab) {
                    chrome.tabs.remove(tab.id, function () {});
                });
            }, 3000)
        }
    });
})

//add Avatar and username if exist
var username = document.getElementById('user-name')
var avatar = document.getElementById('user-avatar')


chrome.storage.sync.get({
    'userInformations': null
}, (results) => {
    if (results != null && results.userInformations != null) {
        username.innerHTML = results.userInformations.username
        avatar.src = (results.userInformations.avatar) ? ("https://cdn.discordapp.com/avatars/" + results.userInformations.id + "/" + results.userInformations.avatar + (results.userInformations.avatar.includes("a_") ? ".gif" : ".jpg")) : "/assets/img/discord.png";
    }
});


//Send webhook test notification 
var buttonWebhook = document.getElementById('test-webhook')
buttonWebhook.addEventListener('click', (e) => {
    var url = document.getElementById('fill-success-webhook').value;
    jsonData = {
        "action": "test-webhook",
        "url": url
    }
    chrome.runtime.sendMessage(
        jsonData
    );
})
