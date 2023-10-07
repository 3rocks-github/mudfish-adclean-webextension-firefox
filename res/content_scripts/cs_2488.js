
function mudfish_adclean_84e91558646d9681563b06915d49b384() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div:not([class$="-mobile"]) > div[class]:has(> [class*="_ad_"]):not([data-review-count])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_84e91558646d9681563b06915d49b384();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_84e91558646d9681563b06915d49b384();
  });
}
