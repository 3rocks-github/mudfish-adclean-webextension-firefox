
function mudfish_adclean_58b2581fd7e29f69c1c6ffbbafd5b6d7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[style*="background-image"][style*="/data/banner/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_58b2581fd7e29f69c1c6ffbbafd5b6d7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_58b2581fd7e29f69c1c6ffbbafd5b6d7();
  });
}
