
function mudfish_adclean_e3227aa732a2a40e6c9f2f4aa9fb7c47() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.board_main .user_view_target ~ .row:not(:has(.source_url))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e3227aa732a2a40e6c9f2f4aa9fb7c47();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e3227aa732a2a40e6c9f2f4aa9fb7c47();
  });
}
