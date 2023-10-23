
function mudfish_adclean_9540c2deb1d53d0d82aff7429ac41415() {
  try {
    Sizzle(`#header-menu-right`).forEach(element => {
      element.style.float = "right !important";
element.style.borderLeft = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9540c2deb1d53d0d82aff7429ac41415 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9540c2deb1d53d0d82aff7429ac41415, function (items) {
  if (mudfish_adclean_g_conf_9540c2deb1d53d0d82aff7429ac41415.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9540c2deb1d53d0d82aff7429ac41415();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9540c2deb1d53d0d82aff7429ac41415();
    });
  }
});
