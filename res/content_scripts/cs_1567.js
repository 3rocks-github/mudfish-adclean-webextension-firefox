
function mudfish_adclean_74c1224e1b78a82b1a56819b6cc8efc8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[class$="-advert"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_74c1224e1b78a82b1a56819b6cc8efc8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_74c1224e1b78a82b1a56819b6cc8efc8();
  });
}
