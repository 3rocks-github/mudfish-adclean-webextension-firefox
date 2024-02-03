
function mudfish_adclean_fbb07dfa858be211c7d0ba0907f5df63() {
  try {
    Sizzle(`.at-main > .widget-box`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fbb07dfa858be211c7d0ba0907f5df63 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fbb07dfa858be211c7d0ba0907f5df63, function (items) {
  if (mudfish_adclean_g_conf_fbb07dfa858be211c7d0ba0907f5df63.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fbb07dfa858be211c7d0ba0907f5df63();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fbb07dfa858be211c7d0ba0907f5df63();
    });
  }
});
