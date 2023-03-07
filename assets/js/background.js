/**
 * @author VGontier / gontiervivien@gmail.com
 * date: 2020-02-17
 * title: background
 */

//Discord auth 
var private_webhook_link = "******";
var public_webhook_link = "******"

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {

    //check if the answer is empty / undefined 
    if (request == undefined) {
      sendResponse({
        farewell: "error data is empty"
      });
    } else {
      var json = {};
      let data = request;

      switch (data['action']) {

        //Send requests to discord webhooks for logs 
        case 'logs':
          var requestPublic = new XMLHttpRequest();
          var requestPrivate = new XMLHttpRequest();
          var requestWebhook = new XMLHttpRequest();
          //Create the embed for requests 
          chrome.storage.sync.get({
            'userInformations': null
          }, async (results) => {
            json = JSON.stringify({
              embeds: [{
                "author": {
                  "name": data['site'],
                  "link": data['site']
                },
                "title": "Successful Checkout ✅",
                "color": 944074,
                "fields": [{
                    "name": "Product",
                    "value": data['product'],
                    "inline": true
                  },
                  {
                    "name": "Price",
                    "value": data['price']
                  },
                  {
                    "name": "User",
                    "value": (results.userInformations) ? results.userInformations.username : "Anonymous User"
                  }
                ],
                "thumbnail": {
                  "url": data['image_url']
                },
                "footer": {
                  "text": "CookBeast Chrome Tools",
                  "icon_url": "https://cookbeast.io/pics/CB1.png"
                }
              }]
            });
            //For public logs 
            chrome.storage.sync.get({
              'settings': []
            }, (results) => {
              if (results.settings.share_success == true) {
                requestPublic.open("POST", public_webhook_link, true);
                requestPublic.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                requestPublic.send(json);
              }
              //For private logs 
              requestPrivate.open("POST", private_webhook_link, true);
              requestPrivate.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
              requestPrivate.send(json);

              //For webhook
              if (results.settings.success_webhook != null && results.settings.success_webhook.length > 0)
                requestWebhook.open("POST", results.settings.success_webhook, true);
              requestWebhook.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
              requestWebhook.send(json);
            });
          });
          //Send response to content script 
          sendResponse({
            farewell: "Send checkout success"
          });
          break;




          //Discord authentication
        case 'discordLogin':
          //On reinitialise les informations à chaque demande d'authentification
          chrome.storage.sync.set({
            'userInformations': null
          });

          //Système d'authentification
          chrome.tabs.create({
            url: "https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D706585302441132115%26redirect_uri%3Dhttp%253A%252F%252F134.122.66.16%253A3000%26response_type%3Dcode%26scope%3Didentify%2520guilds"
          });
          sendResponse({
            farewell: "Discord Login"
          });
          break;

        case 'test-webhook':
          var request = new XMLHttpRequest();
          json = JSON.stringify({
            embeds: [{
              "title": "Webhook Test ✅",
              "color": 944074,
              "fields": [{
                "name": "Result",
                "value": "It's working",
                "inline": true
              }],
              "thumbnail": {
                "url": "https://cookbeast.io/pics/CB1.png"
              },
              "footer": {
                "text": "CookBeast Chrome Tools",
                "icon_url": "https://cookbeast.io/pics/CB1.png"
              }
            }]
          });
          try {
            request.open("POST", data['url'], true);
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.send(json);
          } catch (e) {
            sendResponse({
              farewell: "error :" + e
            });
          }
          sendResponse({
            farewell: "test succesful" + e
          });
          break;
        case "loadLoginPage":
          chrome.tabs.getSelected(function (tab) {
            chrome.tabs.create({
              url: "chrome-extension://" + chrome.runtime.id + "/dashboard.html"
            })
          });
          sendResponse("done")

        default:
          break;
      }
    }
    return true;
  });
