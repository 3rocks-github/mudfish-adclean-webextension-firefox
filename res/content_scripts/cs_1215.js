
function mudfish_adclean_7eae74a9bcdb6045d4a722c2ef4debf3() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section[sc^="power"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_7eae74a9bcdb6045d4a722c2ef4debf3();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_7eae74a9bcdb6045d4a722c2ef4debf3();
  });
}
