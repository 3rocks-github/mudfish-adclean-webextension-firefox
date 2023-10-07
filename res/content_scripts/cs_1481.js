
function mudfish_adclean_8f04d336a15ba16d96c61dfd3fe9e6be() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.contents_body > div[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8f04d336a15ba16d96c61dfd3fe9e6be();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8f04d336a15ba16d96c61dfd3fe9e6be();
  });
}
