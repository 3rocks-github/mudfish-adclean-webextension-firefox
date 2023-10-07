
function mudfish_adclean_0c4cddbb99dd178792f8e95265e5d8ab() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[data-log-actionid-area^="focus"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0c4cddbb99dd178792f8e95265e5d8ab();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0c4cddbb99dd178792f8e95265e5d8ab();
  });
}
