
function mudfish_adclean_783b3f7a71bf83297567782ce8e1cc46() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`center > div[style*="margin:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_783b3f7a71bf83297567782ce8e1cc46();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_783b3f7a71bf83297567782ce8e1cc46();
  });
}
