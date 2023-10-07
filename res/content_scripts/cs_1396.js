
function mudfish_adclean_3ee0ad9c5724c54b3d908e0ea61e6679() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#wrap_right > #right`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3ee0ad9c5724c54b3d908e0ea61e6679();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3ee0ad9c5724c54b3d908e0ea61e6679();
  });
}
