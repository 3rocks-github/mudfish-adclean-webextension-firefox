
function mudfish_adclean_3a0dfd663f81d7fa6f7ba9feb5235f44() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.feed-list-wrap .feed-item-wrap-SPONSORED`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3a0dfd663f81d7fa6f7ba9feb5235f44();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3a0dfd663f81d7fa6f7ba9feb5235f44();
  });
}
