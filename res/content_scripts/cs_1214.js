
function mudfish_adclean_c5a880cd478eb490a5a6e5de91c068a7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="deepdive_widget_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c5a880cd478eb490a5a6e5de91c068a7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c5a880cd478eb490a5a6e5de91c068a7();
  });
}
