
function mudfish_adclean_cf2b8859783a68ffcd877e7c5c75ae3b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body > #wrap.wrap ~ div[style*="height:"]`).forEach(element => {
        element.style.remove = "true";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_cf2b8859783a68ffcd877e7c5c75ae3b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_cf2b8859783a68ffcd877e7c5c75ae3b();
  });
}
