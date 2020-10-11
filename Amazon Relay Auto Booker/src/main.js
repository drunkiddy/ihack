console.log("Extension loaded");

let ui = new UI();
let refresher = new RefreshController();
let orderer = new OrderController();

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    //console.log(message);
    if (message.type === "FromPopup") {
        switch (message.data.message) {
            case "GetIsPlaying":
                sendResponse({
                    isPlaying: refresher.isPlaying
                });
                break;
            case "SetRefreshTime":
                refresher.setRefreshTime(message.data.data);
                break;
            case "GetRefreshTime":
                sendResponse({
                    refreshTime: refresher.refreshTime
                });
                break;
            case "SetVisualNotification":
                orderer.setVisualNotification(message.data.data);
                break;
            case "GetVisualNotification":
                sendResponse({
                    value: orderer.visualNotification
                });
                break;
            case "SetClickToBook":
                orderer.setClickToBook(message.data.data);
                break;
            case "GetClickToBook":
                sendResponse({
                    value: orderer.clickToBook
                });
                break;
            case "SetIsDev":
                orderer.setIsDev(message.data.data);
                break;
            case "GetIsDev":
                sendResponse({
                    value: orderer.isDev
                });
                break;
            case "Init":
                refresher.init();
                break;
        }
    }
});

async function setStorageValue(name, value) {
    return new Promise((resolve, reject) => {
        let obj = {};
        obj[name] = value;
        chrome.storage.sync.set(obj, result =>
            chrome.runtime.lastError
                ? reject(Error(chrome.runtime.lastError.message))
                : resolve());
    });
}

async function getStorageValue(name) {
    return new Promise((resolve, reject) =>
        chrome.storage.sync.get(name, result =>
            chrome.runtime.lastError
                ? reject(Error(chrome.runtime.lastError.message))
                : resolve(result[name])));
}
