class UI {
    constructor() {
    }

    onPlay() {
        console.log("onPlay");
        $('#btnPlay').text("Pause");
        sendMessageToPopup("onPlay");
    }

    onPause() {
        console.log("onPause");
        $('#btnPlay').text("Play");
        sendMessageToPopup("onPause");
    }
}

//MESSAGE UTILS
let isFocused = true;
window.onfocus = function () {
    isFocused = true;
};

window.onblur = function () {
    isFocused = false;
};

function sendMessageToPopup(message, data) {
    if (isFocused)
        return;
    chrome.runtime.sendMessage({
        type: "ToPopup",
        data: {
            message: message,
            data: data
        }
    }, function (response) {
        console.dir(response);
    });
}
