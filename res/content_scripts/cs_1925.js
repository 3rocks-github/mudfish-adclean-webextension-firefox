
function mudfish_adclean_0c2be377919f094789c67054950c6e75() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#pnlContainer > div[class^="ct"] > .section > div[style]:not(class)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0c2be377919f094789c67054950c6e75();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0c2be377919f094789c67054950c6e75();
  });
}
