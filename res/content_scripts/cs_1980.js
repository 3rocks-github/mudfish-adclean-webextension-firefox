
function mudfish_adclean_3c67a20a072d2d957a2c4c400d7d98e2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src*="//realty.chosun.com/RealtyCommon/Promotion"][src$=".html"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3c67a20a072d2d957a2c4c400d7d98e2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3c67a20a072d2d957a2c4c400d7d98e2();
  });
}
