
function mudfish_adclean_9d2ce7aab52fcdb1a7f50dbaf34d8e34() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.article_view > .p_space + div + .h20`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9d2ce7aab52fcdb1a7f50dbaf34d8e34();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9d2ce7aab52fcdb1a7f50dbaf34d8e34();
  });
}
