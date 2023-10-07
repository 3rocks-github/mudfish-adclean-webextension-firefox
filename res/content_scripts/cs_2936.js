
function mudfish_adclean_1949111229bc3ea7c57d5d17fc6d1fdb() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section[class*="_ad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1949111229bc3ea7c57d5d17fc6d1fdb();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1949111229bc3ea7c57d5d17fc6d1fdb();
  });
}
