
function mudfish_adclean_11c8725e3fd9aad20a96737c6cdc5c44() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="ct"] > .section > .view_box > #divViewBox > .viewbox > div[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_11c8725e3fd9aad20a96737c6cdc5c44();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_11c8725e3fd9aad20a96737c6cdc5c44();
  });
}
