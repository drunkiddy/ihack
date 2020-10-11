const a = ['tick', '.fa-sort-amount-asc', 'children', 'removedNodes', 'hidden', 'outerHTML', 'isSpinnerRemoved', '.tour-listing--loadboard', 'isPlaying',
    'visibilitychange', 'hasResults', 'Age', 'checkSort', '.tours-controls__selected-option', 'refreshTime', 'isPopupAcceptButton', 'isLoading', 'onPlay',
    'text', '.tours-controls__option:contains(\x27Newest\x27)', 'Spinner\x20removed', 'length', 'click', 'checkLoading', '#btnPlay', 'reloadBoard',
    'onPopupConfirmationOpen', '.no-tours-found', 'play', '.tour-header', 'playSwitch', '.loadboard-reload__refresh-icon--reload-icon', 'setTimeout\x20',
    'blackList', 'addSkipItem', 'push', '<button\x20id=\x22btnPlay\x22>Play</button>', 'pause', 'LIST\x20COMPLETE\x20LOADED', '.tours-controls__selected-option-value',
    'observeSpinnerRemoved', 'find', 'setRefreshTime', 'addedNodes', 'log', 'init', 'setIsPlaying', 'exec', 'each', 'afterLoadingComplete', 'hasClass',
    'checkTimeoutId', 'loadRefreshTime'];
(function (b, e) {
    const f = function (g) {
        while (--g) { b['push'](b['shift']()); }
    }; f(++e);
}(a, 0x1cd));

const b = function (c, d) {
    c = c - 0x0;
    let e = a[c];
    return e;
}; class RefreshController{
    constructor() {
        this[b('0x9')](![]);
        this[b('0xe')] = null;
        this[b('0x1e')] = 0x0;
        this[b('0xf')]();
        this[b('0x31')] = [];
    } [b('0x5')](c) {
        this[b('0x1e')] = c;
        setStorageValue('refreshTime', c);
    } async[b('0xf')]() {
        let c = await getStorageValue(b('0x1e'));
        if (c) this[b('0x1e')] = c;
    } [b('0x29')]() {
        console[b('0x7')](b('0x29') +
            this[b('0x18')] + '\x20' +
            this[b('0x1e')]);
        if (!this[b('0x18')])
            return; $(b('0x2f'))[b('0x26')]();
        if (document[b('0x14')]) {
            clearTimeout(
                this[b('0xe')]);
            this[b('0xe')] = setTimeout(
                this[b('0x27')],
                this[b('0x1e')]);
        }
    } [b('0x20')]() {
        try {
            return $(b('0x17'))['length'] == 0x0 && $(b('0x2b'))[b('0x25')] == 0x0;
        } catch{
            return !![];
        }
    } [b('0x27')]() {
        console[b('0x7')](b('0x27'));
        if (!refresher[b('0x18')])
            return;
        clearTimeout(
                refresher[b('0xe')]);
        if (
            refresher[b('0x20')]()) {
            refresher[b('0xe')] = setTimeout(
                refresher[b('0x27')],
            this[b('0x1e')]);
        } else {
            console[b('0x7')](b('0x1') +
                refresher['isLoading']());
            refresher[b('0xc')]();
        }
    } [b('0x10')]() {
        console[b('0x7')]('Tick'); setTimeout(
            this[b('0x10')], 0x3e8);
    } ['isSpinnerRemoved'](c) {
        return c[b('0x13')][b('0x25')] == 0x1 && c[b('0x13')][0x0][b('0x15')] === '<div></div>';
    } [b('0x1a')]() {
        let c = $(b('0x17'))[b('0x12')]();
        if (c[b('0x25')] === 0x0)
            return ![];
        let d = []; c[b('0x4')](b('0x2d'))[b('0xb')](
            function () {
                if (!refresher[b('0x31')]['includes'](
                    this['id'])) d[b('0x33')](
                        this['id']);
            }); return d['length'] > 0x0;
    } [b('0x32')](c) {
        this[b('0x31')][b('0x33')](c);
    } [b('0xc')]() {
        console['log'](b('0x24'));
        if (this['hasResults']()) {
            orderer[b('0xa')]();
            this['pause']();
        } else {
            if (this['refreshTime'] < 0x2)
                this[b('0x29')]();
            else {
                console[b('0x7')](b('0x30'));
                setTimeout(() => {
                    refresher[b('0x29')]();
                }, refresher[b('0x1e')]);
            }
        }
    } [b('0x1f')](c) {
        return c[b('0x6')][b('0x25')] == 0x1 && $(c[b('0x6')][0x0])[b('0xd')]('confirmation-body__footer__confirm-button');
    } [b('0x3')]() {
        let c = new MutationObserver(
            function (d) {
                for (
                    let f = 0x0; f < d[b('0x25')]; f++){
                    let g = d[f];
                    if (g['removedNodes'] && g[b('0x13')][b('0x25')] > 0x0) {
                        if (refresher[b('0x16')](g) && !refresher[b('0x20')]()) {
                            refresher[b('0x27')]();
                            break;
                        }
                    } else if (g[b('0x6')] && g[b('0x6')][b('0x25')] > 0x0) {
                        if (refresher[b('0x1f')](g))
                            orderer[b('0x2a')]();
                    }
                }
            }); c['observe']($('#application')[0x0], { 'childList': !![], 'subtree': !![] });
    } [b('0x2c')]() {
        this[b('0x9')](!![]);
        if (this['checkSort']())
            this[b('0x29')]();
        ui[b('0x21')]();
    } ['pause']() {
        this[b('0x9')](![]);
        ui['onPause']();
    } [b('0x9')](c) {
        this[b('0x18')] = c;
        setStorageValue(b('0x18'), c);
    } [b('0x2e')]() {
        console[b('0x7')](b('0x2e'));
        if (
            this[b('0x18')])
            this[b('0x0')]();
        else this[b('0x2c')]();
    } [b('0x1c')]() {
        let c = $(b('0x2'));
        if (c[b('0x4')](b('0x11'))[b('0x25')] !== 0x1 || c[b('0x22')]() !== b('0x1b')) {
        $(b('0x1d'))[b('0x26')](); $(b('0x23'))[b('0x26')]();
            return ![];
        } return !![];
    } ['createPlayButton']() {
        let c = $(b('0x34'))[b('0x26')](
            function () { refresher[b('0x2e')](); });
        $('.loadboard-reload__refresh-icon--reload-icon')['after'](c);
    } [b('0x8')]() {
        if ($(b('0x28'))[b('0x25')] !== 0x0)
            return;
        this[b('0x3')]();
        this['createPlayButton']();
        document['addEventListener'](b('0x19'),
            function () {
                if (document[b('0x14')] && refresher[b('0x18')])
                    refresher[b('0x27')]();
            });
    }
}