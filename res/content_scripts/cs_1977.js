
function mudfish_adclean_4f5001489cf801a10d6a63818ab8bc03() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.side-ad-box`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4f5001489cf801a10d6a63818ab8bc03();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4f5001489cf801a10d6a63818ab8bc03();
  });
}
