
function mudfish_adclean_4768e3b49899aeb000ef3f75ff6a41c1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#contentArea > div[style^="width:"][id]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4768e3b49899aeb000ef3f75ff6a41c1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4768e3b49899aeb000ef3f75ff6a41c1();
  });
}
