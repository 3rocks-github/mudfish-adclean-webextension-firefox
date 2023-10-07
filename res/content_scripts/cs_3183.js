
function mudfish_adclean_6bc7c9e9ebc216c738b62ece43b50cfb() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.comic_bot_bnr`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6bc7c9e9ebc216c738b62ece43b50cfb();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6bc7c9e9ebc216c738b62ece43b50cfb();
  });
}
