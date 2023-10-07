
function mudfish_adclean_3eb4857a877759693d75d4c55faa12e9() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.plp-default__item.search-product__cmg-badge`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3eb4857a877759693d75d4c55faa12e9();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3eb4857a877759693d75d4c55faa12e9();
  });
}
