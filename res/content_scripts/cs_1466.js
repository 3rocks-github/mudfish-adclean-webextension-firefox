
function mudfish_adclean_0f85f9a5026765d5de0a779e5477e46f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#viewarea ~ br ~ div[style*="height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0f85f9a5026765d5de0a779e5477e46f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0f85f9a5026765d5de0a779e5477e46f();
  });
}
