
function mudfish_adclean_39816a1da0ba365f56643ccf0ed30d67() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.content_body > div[class^="lotto_"]`).forEach(element => {
        element.style.filter = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_39816a1da0ba365f56643ccf0ed30d67();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_39816a1da0ba365f56643ccf0ed30d67();
  });
}
