
function mudfish_adclean_3c1e3dabdf4e57d141f64f5cab06e474() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div:has(> div > div > div:contains(연관상품) > div:has(> div:contains(AD)) > img[alt="AD 가이드"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3c1e3dabdf4e57d141f64f5cab06e474();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3c1e3dabdf4e57d141f64f5cab06e474();
  });
}
