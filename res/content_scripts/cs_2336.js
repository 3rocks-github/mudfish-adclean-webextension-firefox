
function mudfish_adclean_812a1879225680de717688a3bbf82162() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[style][width][cellspacing][cellpadding] tr[valign] > td[style] > div[style]`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_812a1879225680de717688a3bbf82162();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_812a1879225680de717688a3bbf82162();
  });
}
