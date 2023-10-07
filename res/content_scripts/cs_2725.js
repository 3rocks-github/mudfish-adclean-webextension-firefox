
function mudfish_adclean_1f1a0462fede243b5e967eee9532c3f4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#content .ad_parent`).forEach(element => {
        element.style.height = "100% !important";
element.style.overflow = "auto !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1f1a0462fede243b5e967eee9532c3f4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1f1a0462fede243b5e967eee9532c3f4();
  });
}
