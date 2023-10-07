
function mudfish_adclean_66f471f290ca4f577cf4cc9f3b639662() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src*="//ad.pping.kr/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_66f471f290ca4f577cf4cc9f3b639662();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_66f471f290ca4f577cf4cc9f3b639662();
  });
}
