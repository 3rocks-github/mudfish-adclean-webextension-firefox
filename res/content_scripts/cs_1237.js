
function mudfish_adclean_57e4daa664a244f9492218b9a1acbb99() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style^="width:"][class="adsbygoogle"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_57e4daa664a244f9492218b9a1acbb99();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_57e4daa664a244f9492218b9a1acbb99();
  });
}
