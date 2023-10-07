
function mudfish_adclean_76ce933a0007341861c3416ccff86fd6() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id$="_sponser"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_76ce933a0007341861c3416ccff86fd6();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_76ce933a0007341861c3416ccff86fd6();
  });
}
