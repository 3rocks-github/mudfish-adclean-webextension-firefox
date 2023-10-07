
function mudfish_adclean_ca2486b5e5dc5eded119b2876ac57e17() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id*="-ad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ca2486b5e5dc5eded119b2876ac57e17();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ca2486b5e5dc5eded119b2876ac57e17();
  });
}
