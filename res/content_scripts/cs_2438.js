
function mudfish_adclean_3a45ae867e32b70f9e04e6322db64c47() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style] > .td_block_wrap:has(a[target="blank"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3a45ae867e32b70f9e04e6322db64c47();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3a45ae867e32b70f9e04e6322db64c47();
  });
}
