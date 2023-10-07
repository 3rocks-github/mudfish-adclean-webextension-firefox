
function mudfish_adclean_12c85c5535ab16b78659ce51382d0a0d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[class^="document_"].xe_content`).forEach(element => {
        element.style.display = "block !important";
element.style.height = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_12c85c5535ab16b78659ce51382d0a0d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_12c85c5535ab16b78659ce51382d0a0d();
  });
}
