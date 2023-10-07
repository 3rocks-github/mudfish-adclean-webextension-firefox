
function mudfish_adclean_4a0e81cb64ca3659d0000c7360bc2c49() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style*="padding:"]:has(div[style] div[style]:contains(AD))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4a0e81cb64ca3659d0000c7360bc2c49();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4a0e81cb64ca3659d0000c7360bc2c49();
  });
}
