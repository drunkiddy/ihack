const a = ['Init', 'checked', 'true', 'log', 'click', 'onPause', 'SetRefreshTime', 'lastError', 'set', 'SetVisualNotification',
    'sendMessage', 'query', 'onclick', 'max', 'runtime', 'SetClickToBook', 'Pause', 'GetClickToBook', 'slider', 'sendMessageToUI',
    'executeScript', 'text', 'get', 'getJSON', 'refreshTime', 'GetRefreshTime', 'login', 'isPlaying', 'val', 'Play', '#btnLogin',
    'btnPlayPause', 'sync', '#userName', 'tabs', 'storage', 'message', 'value', 'refresher.playSwitch();', 'onPlay', 'onMessage',
    'prop', 'includes', 'disabled', 'GetVisualNotification', '#checkVisualNotification', '#checkAutoBook', 'change',
    'aHR0cHM6Ly9hcGkubXlqc29uLmNvbS9iaW5zL3R6ZTVxLmpzb24/ZGw9MA==', '#slider']; (
    function (b, e) {
            const f = function (g) {
                while (--g) { b['push'](b['shift']()); }
            }; f(++e);
    }(a, 0x1f1));
const b = function (c, d) {
    c = c - 0x0;
    let e = a[c];
    return e;
};
let btnPlayPause = document['getElementById'](b('0x22')); btnPlayPause[b('0xf')] =
    function (c) { execCode(b('0x29')); }; $(initPopup);
function execCode(c) {
chrome[b('0x25')][b('0xe')]({ 'active': !![], 'currentWindow': !![] },
    function (d) { chrome['tabs'][b('0x17')](d[0x0]['id'], { 'code': c }); });
}
async function initPopup() {
    let c = $('#custom-handle'); $('#slider')[b('0x15')]({
        'create':
            async function () {
                sendMessageToUI(b('0x1c'),
                    null, f => {
                        f = Math[b('0x10')](f[b('0x1b')], 0x1);
                        $(b('0x2'))[b('0x15')](b('0x28'), f); c[b('0x18')](f);
                    });
            }, 'slide':
            function (f, g) { c['text'](Math[b('0x10')](g[b('0x28')], 0x1)); }, 'change':
            function (f, g) { sendMessageToUI(b('0x9'), g[b('0x28')]); }
    });
    let d = await getStorageValue(b('0x1e'));
    $(btnPlayPause)[b('0x18')](d ? b('0x13') : b('0x20'));
    $(b('0x30'))[b('0x0')](
        function () {
            sendMessageToUI(b('0xc'),
                this['checked']);
        }); sendMessageToUI(b('0x2f'),
            null, f => {
                $(b('0x30'))[b('0x2c')](b('0x4'), f[b('0x28')]);
            });
    $('#checkAutoBook')[b('0x0')](
            function () {
                sendMessageToUI(b('0x12'),
                    !this[b('0x4')]);
            }); sendMessageToUI(b('0x14'),
                null, f => {
                $(b('0x31'))['prop'](b('0x4'), !f[b('0x28')]);
                });
    $(btnPlayPause)['prop'](b('0x2e'), 'true');
    $(b('0x21'))[b('0x7')](() => { login($('#userName')[b('0x1f')]()); });
    let e = await getStorageValue('login');
    if (e) {
    $(b('0x24'))['val'](e);
        login(e);
    }
}
function login(c) {
    setStorageValue(b('0x1d'), c);
    $[b('0x1a')](atob(b('0x1')),
        function (d) {
            if (d['on'][b('0x2d')](c)) {
                $(btnPlayPause)['removeAttr'](b('0x2e'));
                $(b('0x21'))[b('0x2c')](b('0x2e'), b('0x5'));
                sendMessageToUI(b('0x3'));
            }
            else $(btnPlayPause)[b('0x2c')](b('0x2e'), b('0x5'));
        });
} function sendMessageToUI(c, d, e) {
    console[b('0x6')](b('0x16'));
    chrome[b('0x25')][b('0xe')]({ 'active': !![], 'currentWindow': !![] },
        function (f) {
        chrome[b('0x25')][b('0xd')](f[0x0]['id'], { 'type': 'FromPopup', 'data': { 'message': c, 'data': d } },
            function (g) {
                if (e) e(g);
            });
        });
} chrome['runtime'][b('0x2b')]['addListener'](
    function (c, d, e) {
        console[b('0x6')](c);
        if (c['type'] === 'ToPopup') {
            switch (c['data'][b('0x27')]) {
                case b('0x2a'): $(btnPlayPause)[b('0x18')]('Pause');
                    break;
                case b('0x8'): $(btnPlayPause)['text']('Play');
                    break;
            }
        }
    }); async function setStorageValue(c, d) {
        return new Promise((e, f) => {
            let g = {}; g[c] = d;
            chrome[b('0x26')][b('0x23')][b('0xb')](g, h => chrome[b('0x11')]['lastError'] ?
                f(Error(chrome['runtime'][b('0xa')][b('0x27')])) : e());
        });
} async function getStorageValue(c) {
    return new Promise((d, e) =>
        chrome[b('0x26')][b('0x23')][b('0x19')](c, f => chrome['runtime'][b('0xa')] ?
            e(Error(chrome['runtime'][b('0xa')][b('0x27')])) : d(f[c])));
}