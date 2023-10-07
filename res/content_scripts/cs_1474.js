
function mudfish_adclean_68f60d7b7169e2789b81e9d530027c62() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#overlay`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_68f60d7b7169e2789b81e9d530027c62();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_68f60d7b7169e2789b81e9d530027c62();
  });
}
