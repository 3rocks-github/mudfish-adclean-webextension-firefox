
function mudfish_adclean_a15aeada1e791af3d0ffe9581b1e5059() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[href*="//link.coupang.com/"][type]`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a15aeada1e791af3d0ffe9581b1e5059();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a15aeada1e791af3d0ffe9581b1e5059();
  });
}
