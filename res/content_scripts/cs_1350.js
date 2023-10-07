
function mudfish_adclean_04efdd801d9f27f59343d010b76e2c32() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="adsense-"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_04efdd801d9f27f59343d010b76e2c32();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_04efdd801d9f27f59343d010b76e2c32();
  });
}
