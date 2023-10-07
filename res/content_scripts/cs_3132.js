
function mudfish_adclean_9b5030c99df064711f9bc5e1bbd0107c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="ad"][class^="ad"][style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9b5030c99df064711f9bc5e1bbd0107c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9b5030c99df064711f9bc5e1bbd0107c();
  });
}
