
function mudfish_adclean_3781925c7fe329d93af1ad563d51c56b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.con_banner`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3781925c7fe329d93af1ad563d51c56b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3781925c7fe329d93af1ad563d51c56b();
  });
}
