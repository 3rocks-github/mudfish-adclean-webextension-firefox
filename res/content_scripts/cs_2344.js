
function mudfish_adclean_9540c2deb1d53d0d82aff7429ac41415() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#header-menu-right`).forEach(element => {
        element.style.float = "right !important";
element.style.borderLeft = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9540c2deb1d53d0d82aff7429ac41415();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9540c2deb1d53d0d82aff7429ac41415();
  });
}
