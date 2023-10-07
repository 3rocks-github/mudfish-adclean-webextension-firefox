
function mudfish_adclean_0e3df9535a189636a5f8ea9d4a2ec1e5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section[class*="-ad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0e3df9535a189636a5f8ea9d4a2ec1e5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0e3df9535a189636a5f8ea9d4a2ec1e5();
  });
}
