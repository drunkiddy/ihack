class OrderController {
    constructor() {
        this.clickToBook = true;
        this.visualNotification = true;
        this.popupText = "";
        this.isDev = false;
        this.isWaitingToConfirm = false;
        this.loadVisualNotification();
        this.loadClickToBook();
        //this.loadIsDev();
    }

    setVisualNotification(value) {
        this.visualNotification = value;
        setStorageValue("visualNotification", value);
    }

    async loadVisualNotification() {
        let value = await getStorageValue("visualNotification");
        if (value)
            this.visualNotification = value;
    }

    setClickToBook(value) {
        this.clickToBook = value;
        setStorageValue("clickToBook", value);
    }

    async loadClickToBook() {
        let value = await getStorageValue("clickToBook");
        if (value)
            this.clickToBook = value;
    }

    setIsDev(value) {
        this.isDev = value;
        setStorageValue("isDev", value);
    }

    async loadIsDev() {
        let value = await getStorageValue("isDev");
        if (value)
            this.isDev = value;
    }

    exec() {
        let item = null;
        let board = $(".tour-listing--loadboard").children();
        if (board.length === 0)
            return false;
        board.find('.tour-header').each(function () {
            if (!refresher.blackList.includes(this.id) && !item) {
                item = $(this);
            }
        });

        if (this.clickToBook) {
            this.selectResult(item);
            this.expandResult(item);
            this.isWaitingToConfirm = true;
            $('.btn:contains("Book")').text("Accept");
            $('.btn:contains("Accept")').before('<button type="button" class="btnSkip" >Next</button>');
            $('.btnSkip').click((event) => {
                let id = $(event.target).parents(".tour-header")[0].id;
                refresher.addSkipItem(id);
                refresher.play();
            });
        } else if (this.visualNotification) {
            this.isWaitingToConfirm = true;
            this.clickBook(item);
            this.popupText = item.text().replace("Are you sure you want to book this trip?", "");
        }
        if (this.visualNotification)
            this.beep();
    }

    selectResult(item) {
        item.css("background-color", "#cce6ff");
    }

    expandResult(item) {
        $(item.children()).click();
    }

    clickBook(item) {
        item.find('.btn:contains("Book")').click();
    }

    onPopupConfirmationOpen() {
        if (!this.isWaitingToConfirm)
            return;
        this.isWaitingToConfirm = false;
        let confirmButtonId = ".confirmation-body__footer__confirm-button";//".confirmation-body__footer__" + (this.isDev ? "cancel-button" : "confirm-button");
        if (!this.isDev)
            $(confirmButtonId).click();
        else
            $(confirmButtonId).css("background-color", "red");
        console.log("Booked " + confirmButtonId);
        setTimeout(() => {
            alert(this.clickToBook ? "Booked" : this.popupText);
        }, 10000);
    }

    beep() {
        new Audio(chrome.runtime.getURL("sounds/beep.mp3")).play();
    }
}


