
function mudfish_adclean_2da15b13d21d013375c0ec3e5bd910e6() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`html[class*="pc-size"] .m-contents > .side-area > .analysis-ranking1`).forEach(element => {
        element.style.top = "475px !important";
element.style.left = "auto !important";
element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2da15b13d21d013375c0ec3e5bd910e6();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2da15b13d21d013375c0ec3e5bd910e6();
  });
}
