
function mudfish_adclean_a56950f89a41e0d763ce9d5db57fe2b3() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[href^="/ws/include/banner_link.asp?"][target="_blank"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a56950f89a41e0d763ce9d5db57fe2b3();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a56950f89a41e0d763ce9d5db57fe2b3();
  });
}
