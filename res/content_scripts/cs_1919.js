
function mudfish_adclean_621dca219987e4b26a4670a92f6a5e94() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="ads_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_621dca219987e4b26a4670a92f6a5e94();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_621dca219987e4b26a4670a92f6a5e94();
  });
}
