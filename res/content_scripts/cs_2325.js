
function mudfish_adclean_c600115af0a9d17ac400b2efafcdaacf() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="ppom_newSub"] .top_newSub .left_wt`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c600115af0a9d17ac400b2efafcdaacf();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c600115af0a9d17ac400b2efafcdaacf();
  });
}
