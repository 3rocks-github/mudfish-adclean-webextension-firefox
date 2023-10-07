
function mudfish_adclean_cd6a7fe4933bed9e121661ce9d2d9319() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`tbody > tr:has(> td > img[src*="/img/adland01.gif"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_cd6a7fe4933bed9e121661ce9d2d9319();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_cd6a7fe4933bed9e121661ce9d2d9319();
  });
}
