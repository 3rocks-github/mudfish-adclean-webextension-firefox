
function mudfish_adclean_c2dc97f93a082250ae1ee7d367cfecf3() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`tr:has(> td[colspan][rowspan] > a[href*="//prod.danawa.com/"] > img[src^="./partner/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c2dc97f93a082250ae1ee7d367cfecf3();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c2dc97f93a082250ae1ee7d367cfecf3();
  });
}
