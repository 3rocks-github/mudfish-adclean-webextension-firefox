
function mudfish_adclean_583a1e13cf2665677754fe4f6f2dddb2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`html[style]`).forEach(element => {
        element.style.overflow = "auto !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_583a1e13cf2665677754fe4f6f2dddb2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_583a1e13cf2665677754fe4f6f2dddb2();
  });
}
