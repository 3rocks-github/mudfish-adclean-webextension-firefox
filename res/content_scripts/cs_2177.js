
function mudfish_adclean_fe7faf471b04c8d5a63d8b0e447f5b05() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[data-ez-name]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fe7faf471b04c8d5a63d8b0e447f5b05();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fe7faf471b04c8d5a63d8b0e447f5b05();
  });
}
