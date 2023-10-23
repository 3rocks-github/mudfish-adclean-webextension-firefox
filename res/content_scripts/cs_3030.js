
function mudfish_adclean_7318c3c4f388f057280c3e886e4fde29() {
  try {
    Sizzle(`.mContRT .mbnZone`).forEach(element => {
      element.style.left = "94.5px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7318c3c4f388f057280c3e886e4fde29 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7318c3c4f388f057280c3e886e4fde29, function (items) {
  if (mudfish_adclean_g_conf_7318c3c4f388f057280c3e886e4fde29.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7318c3c4f388f057280c3e886e4fde29();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7318c3c4f388f057280c3e886e4fde29();
    });
  }
});
