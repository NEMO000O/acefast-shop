window.Telegram = window.Telegram || {};
window.Telegram.WebApp = (function() {
    var WebApp = {};
    var parentWindow = window.parent;

    WebApp.initData = "";
    WebApp.initDataUnsafe = {};
    WebApp.version = "8.0";
    WebApp.platform = "unknown";
    WebApp.isExpanded = false;
    WebApp.viewportHeight = window.innerHeight;

    WebApp.ready = function() {
        parentWindow.postMessage(JSON.stringify({event: "web_app_ready"}), "*");
    };
    WebApp.expand = function() {
        parentWindow.postMessage(JSON.stringify({event: "web_app_expand"}), "*");
        WebApp.isExpanded = true;
    };
    WebApp.close = function() {
        parentWindow.postMessage(JSON.stringify({event: "web_app_close"}), "*");
    };
    WebApp.sendData = function(data) {
        parentWindow.postMessage(JSON.stringify({event: "web_app_data", data: data}), "*");
    };
    
    // ИСПРАВЛЕНО: Официальный метод открытия внешних ссылок и ссылок t.me
    WebApp.openLink = function(url, options) {
        parentWindow.postMessage(JSON.stringify({event: "web_app_open_link", url: url, options: options}), "*");
    };

    // ИСПРАВЛЕНО: Официальный метод перенаправления текста в чаты (Inline Query)
    WebApp.switchInlineQuery = function(query, choose_chat_types) {
        parentWindow.postMessage(JSON.stringify({event: "web_app_switch_inline_query", query: query, choose_chat_types: choose_chat_types}), "*");
    };

    return WebApp;
})();
window.TelegramWebApp = window.Telegram.WebApp;
