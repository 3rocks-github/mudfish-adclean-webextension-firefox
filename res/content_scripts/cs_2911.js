
function mudfish_adclean_d756417fdd6e72db7d31cfa4e8a89023() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#welcomeMainBanner_welcomeMain div[id*="_containerWrap_"]:has(img[src$="Banner/ad.jpg"])`).forEach(element => {
        element.style.remove = "true";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d756417fdd6e72db7d31cfa4e8a89023();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d756417fdd6e72db7d31cfa4e8a89023();
  });
}
