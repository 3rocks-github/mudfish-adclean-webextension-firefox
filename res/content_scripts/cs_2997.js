
function mudfish_adclean_e69984f01d552d1a890330a3993c8b8c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="_adArea"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e69984f01d552d1a890330a3993c8b8c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e69984f01d552d1a890330a3993c8b8c();
  });
}
