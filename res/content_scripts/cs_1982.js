
function mudfish_adclean_25b037c2677c9e866c33d04f7af5de5d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src="/common/inc/main_right_banner.asp"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_25b037c2677c9e866c33d04f7af5de5d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_25b037c2677c9e866c33d04f7af5de5d();
  });
}
