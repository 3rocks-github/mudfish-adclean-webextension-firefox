
function mudfish_adclean_5d2e7f4bd85e1de6a27650160bad6bdc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.board_view .related_content > ul > a`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5d2e7f4bd85e1de6a27650160bad6bdc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5d2e7f4bd85e1de6a27650160bad6bdc();
  });
}
