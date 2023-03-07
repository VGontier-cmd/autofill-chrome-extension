const http = new XMLHttpRequest();
var url = "http://**********/verify?token="

async function authentication() {
    var urlParams = window.location.href.split('?')[1].split('=')

    if (urlParams && urlParams[0] == "code") {
        var input = document.getElementsByTagName('input')[0]
        if (input) {
            url += input.value;
            http.open("GET", url);
            http.send()

            http.onreadystatechange = (e) => {
                if (http.readyState === 4 && http.status === 200)
                    if (http.response.includes("username")) {
                        chrome.storage.sync.get({
                            'userInformations': null
                        }, async (results) => {
                            console.log(results)
                            if (results.userInformations == null) {
                                chrome.storage.sync.set({
                                    'userInformations': JSON.parse(http.response)
                                })
                                chrome.runtime.sendMessage({
                                        action: "loadLoginPage"
                                    },
                                    function (response) {
                                        console.log(response)
                                    }
                                );
                            }
                        });
                    }
            }
        }
    }
}

authentication();