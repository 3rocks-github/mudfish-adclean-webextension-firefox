
function mudfish_adclean_b2b2e464f408dff4ce3fb31e202e0abe() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.mContRT .mbnRT`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b2b2e464f408dff4ce3fb31e202e0abe();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b2b2e464f408dff4ce3fb31e202e0abe();
  });
}
