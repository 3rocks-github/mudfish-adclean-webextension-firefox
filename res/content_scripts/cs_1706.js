
function mudfish_adclean_4b545c5e12c9759b57089a12e7dabd44() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id$="_bn_area"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4b545c5e12c9759b57089a12e7dabd44();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4b545c5e12c9759b57089a12e7dabd44();
  });
}
