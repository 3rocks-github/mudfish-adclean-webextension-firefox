
function mudfish_adclean_8f5c18c43df86660a2c5c984e6be92e9() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#news_main_all_wrp .today_issue ~ section[class="today_issue"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8f5c18c43df86660a2c5c984e6be92e9();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8f5c18c43df86660a2c5c984e6be92e9();
  });
}
