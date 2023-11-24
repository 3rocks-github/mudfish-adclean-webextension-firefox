
function mudfish_adclean_931173c784d5bbbf23397190f3d99c5d() {
  try {
    Sizzle(`ins.adsbygoogle`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_931173c784d5bbbf23397190f3d99c5d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_931173c784d5bbbf23397190f3d99c5d, function (items) {
  if (mudfish_adclean_g_conf_931173c784d5bbbf23397190f3d99c5d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_931173c784d5bbbf23397190f3d99c5d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_931173c784d5bbbf23397190f3d99c5d();
    });
  }
});
