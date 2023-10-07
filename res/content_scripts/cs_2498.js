
function mudfish_adclean_6fb27dcabc02d901fb6f9ba81a040d46() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.wrap_body .clearBoth ~ div[class^="margin_bottom"]:not(:has(+ *))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6fb27dcabc02d901fb6f9ba81a040d46();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6fb27dcabc02d901fb6f9ba81a040d46();
  });
}
