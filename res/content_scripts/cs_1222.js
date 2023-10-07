
function mudfish_adclean_96286ba7d219c6a5848d26f823b1b4d8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#mw_mobile > div[style^="margin-bottom:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_96286ba7d219c6a5848d26f823b1b4d8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_96286ba7d219c6a5848d26f823b1b4d8();
  });
}
