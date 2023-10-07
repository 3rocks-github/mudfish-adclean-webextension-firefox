
function mudfish_adclean_022465094c732601c955c30acf8a42b8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class$="ad_area"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_022465094c732601c955c30acf8a42b8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_022465094c732601c955c30acf8a42b8();
  });
}
