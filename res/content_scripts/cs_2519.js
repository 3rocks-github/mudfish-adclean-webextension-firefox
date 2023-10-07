
function mudfish_adclean_bc6f6f5f9b624bd0b3757bc16c3605d7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style~="!important;"] > .nw_box > div:not(class):not(id) > table[cellspacing="0"][class]:not(:has(a[href*="//gigglehd.com/gg/"]))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_bc6f6f5f9b624bd0b3757bc16c3605d7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_bc6f6f5f9b624bd0b3757bc16c3605d7();
  });
}
