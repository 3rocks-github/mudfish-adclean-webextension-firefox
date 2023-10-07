
function mudfish_adclean_86a68356b69239793b713ae10613f1eb() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#welcomeMainBanner_welcome_tab li[id]:has(img[src*="/img/banner/flash/welcome/nav/"]:not([src*="/nav/181010_"]))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_86a68356b69239793b713ae10613f1eb();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_86a68356b69239793b713ae10613f1eb();
  });
}
