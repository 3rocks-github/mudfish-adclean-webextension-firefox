
function mudfish_adclean_39f19f0229acb76b7f8079a6df8e3e1a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`main div[class*="space-"].hidden.flex-none`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_39f19f0229acb76b7f8079a6df8e3e1a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_39f19f0229acb76b7f8079a6df8e3e1a();
  });
}
