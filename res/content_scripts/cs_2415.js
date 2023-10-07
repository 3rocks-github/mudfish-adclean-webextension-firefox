
function mudfish_adclean_59f5092358ab3aa5dbaafc64b0b07036() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[id^="li"] > [id]:has(span ~ div img[src$="_ad.gif"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_59f5092358ab3aa5dbaafc64b0b07036();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_59f5092358ab3aa5dbaafc64b0b07036();
  });
}
