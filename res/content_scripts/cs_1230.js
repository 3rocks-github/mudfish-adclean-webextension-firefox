
function mudfish_adclean_656b46a724bdf98b3f3909572b44c419() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.search_content > section[data-log-actionid-area="power"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_656b46a724bdf98b3f3909572b44c419();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_656b46a724bdf98b3f3909572b44c419();
  });
}
