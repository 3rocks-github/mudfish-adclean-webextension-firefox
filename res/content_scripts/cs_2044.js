
function mudfish_adclean_96b3a9b1fe473539f47f3c47e24aea5e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="scm_ban"][style*="url(/media/banner/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_96b3a9b1fe473539f47f3c47e24aea5e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_96b3a9b1fe473539f47f3c47e24aea5e();
  });
}
