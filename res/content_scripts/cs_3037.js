
function mudfish_adclean_1abf7dfc205665608a24f71cc11984c6() {
  try {
    Sizzle(`#mbnRoll_yNow > .mbnRollUnit > .pagen_1`).forEach(element => {
      element.style.width = "363px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1abf7dfc205665608a24f71cc11984c6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1abf7dfc205665608a24f71cc11984c6, function (items) {
  if (mudfish_adclean_g_conf_1abf7dfc205665608a24f71cc11984c6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1abf7dfc205665608a24f71cc11984c6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
