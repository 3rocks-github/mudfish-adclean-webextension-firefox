
function mudfish_adclean_31465c74f8fd6820a2848ff3d37091cd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class$="_ad"][style] + .h20`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_31465c74f8fd6820a2848ff3d37091cd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_31465c74f8fd6820a2848ff3d37091cd();
  });
}
