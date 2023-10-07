
function mudfish_adclean_a188879bbc9c44c7e74b7bb896c3bfcd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.banner`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a188879bbc9c44c7e74b7bb896c3bfcd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a188879bbc9c44c7e74b7bb896c3bfcd();
  });
}
