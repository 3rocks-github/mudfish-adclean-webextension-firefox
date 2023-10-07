
function mudfish_adclean_7cd2ca8c646f777e58aa3b4997d2baab() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#section-main.cf > div[class^="section-"] > div[class^="section-"] > div:has( > a[href][alt][target="_blank"] > img[alt][src])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_7cd2ca8c646f777e58aa3b4997d2baab();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_7cd2ca8c646f777e58aa3b4997d2baab();
  });
}
