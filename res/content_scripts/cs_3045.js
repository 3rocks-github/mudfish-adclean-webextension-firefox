
function mudfish_adclean_575aefc714dad7495ead4c6921073afa() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#__next header + section ~ div:has(article[style*="fit-content"] iframe[id^="google_ads_iframe_"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_575aefc714dad7495ead4c6921073afa();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_575aefc714dad7495ead4c6921073afa();
  });
}
