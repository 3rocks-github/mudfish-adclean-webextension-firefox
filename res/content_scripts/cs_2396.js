
function mudfish_adclean_95d66ba007262fc6dae30f50929832af() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.m-row > div[class^="col col-"]:not(:has(> .col__inner a:not([href*="ad-api.enuri.info"]))):has(.bnrbox ul[id][class^="bnr__"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_95d66ba007262fc6dae30f50929832af();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_95d66ba007262fc6dae30f50929832af();
  });
}
