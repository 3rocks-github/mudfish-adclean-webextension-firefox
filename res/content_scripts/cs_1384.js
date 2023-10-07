
function mudfish_adclean_42a520455b2a6f9c00f0ade0a30c8d96() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.article_wrap .bottom_articles`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_42a520455b2a6f9c00f0ade0a30c8d96();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_42a520455b2a6f9c00f0ade0a30c8d96();
  });
}
