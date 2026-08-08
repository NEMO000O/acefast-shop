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

    window.addEventListener("message", function(event) {
        // Служебные события Telegram
    });

    return WebApp;
})();
