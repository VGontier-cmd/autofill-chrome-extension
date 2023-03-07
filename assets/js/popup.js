/**
 * @author VGontier / gontiervivien@gmail.com
 * date: 2020-02-17
 * title: popup.js
*/

var slider = document.getElementById('slider')
var checkBox = document.getElementById('fill-safe-mode')
var infoText = document.getElementById('info_text')
var buttonEvent = document.getElementById("dsh-btn");


//Fill the switch if the extension is enabled
chrome.storage.sync.get({ 'autofill_enabled' : {}}, (results) => {
    if(results.autofill_enabled != undefined){
        results.autofill_enabled ? checkBox.checked = true : checkBox.checked = false;
    }           
});

//Turn on and off the extension
slider.addEventListener('click',function(){
    checkBox.checked ? chrome.storage.sync.set({ 'autofill_enabled' : false}) : chrome.storage.sync.set({ 'autofill_enabled' : true}) 
});

//Choose between dashboard or connection button
chrome.storage.sync.get({ 'userInformations': null}, (results) => { 
    var test= (results.userInformations != null) ? addDashboardButton() : addConnectionButton();
});


//Add the dashboard button if they're some users informations
function addDashboardButton(){
    document.getElementById('loading-btn').style.display = "none";
    buttonEvent.innerHTML ="Open Dashboard";
    buttonEvent.addEventListener('click', ()=> {
        window.open('../../dashboard.html');
    })

    //Show the username if exist 
    chrome.storage.sync.get({'userInformations': null}, (results) => {
        if(results != null && results.userInformations != null)
            if(results.userInformations.username)
                infoText.innerHTML = "Welcome "+ ((results.userInformations.username) ? results.userInformations.username : "User") ;
        else    
            infoText.innerHTML = "Welcome User";
    });
}

//Add a connection button with discord auth
function addConnectionButton(){
    document.getElementById('loading-btn').style.display = "none";
    buttonEvent.innerHTML ="Login with Discord";
    buttonEvent.addEventListener("click", function(){
        chrome.runtime.sendMessage({action:"discordLogin"},
            function (response) {
                console.log(response.farewell)
            }
        );
        document.getElementById('loading-btn').style.display = "";
    });
}



