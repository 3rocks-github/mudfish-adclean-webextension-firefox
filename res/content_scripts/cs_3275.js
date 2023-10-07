
function mudfish_adclean_f5f68224fe182db85bad876815a78ebe() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.custom_code.board_top`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f5f68224fe182db85bad876815a78ebe();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f5f68224fe182db85bad876815a78ebe();
  });
}
