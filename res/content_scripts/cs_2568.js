
function mudfish_adclean_a5b692a65d87ccb33e22dd9ee1a069bd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.offer-container > .suggestion-item:has(a[href="#"] > span:contains(광고))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a5b692a65d87ccb33e22dd9ee1a069bd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a5b692a65d87ccb33e22dd9ee1a069bd();
  });
}
