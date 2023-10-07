
function mudfish_adclean_61393e54a4bf6b48c3f765c3fea31483() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id*="_cpc_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_61393e54a4bf6b48c3f765c3fea31483();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_61393e54a4bf6b48c3f765c3fea31483();
  });
}
