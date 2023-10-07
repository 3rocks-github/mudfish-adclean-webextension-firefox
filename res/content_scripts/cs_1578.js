
function mudfish_adclean_2c25e72219f76539cdac3da73461acd5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[role="main"]#content div[data-pswp-uid].rhymix_content:not([class^="document_"]):not([class^="comment_"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2c25e72219f76539cdac3da73461acd5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2c25e72219f76539cdac3da73461acd5();
  });
}
