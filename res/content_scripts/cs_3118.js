
function mudfish_adclean_656ef13d4e1e2e8ef63dd640a21a5c49() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#btnlist > #listChoiceScope`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_656ef13d4e1e2e8ef63dd640a21a5c49();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_656ef13d4e1e2e8ef63dd640a21a5c49();
  });
}
