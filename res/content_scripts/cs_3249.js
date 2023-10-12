
function mudfish_adclean_1e5f3676a5bc2489ace37c408bb3e415() {
  try {
    Sizzle(`div[name="popAdv"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1e5f3676a5bc2489ace37c408bb3e415 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1e5f3676a5bc2489ace37c408bb3e415, function (items) {
  if (mudfish_adclean_g_conf_1e5f3676a5bc2489ace37c408bb3e415.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1e5f3676a5bc2489ace37c408bb3e415();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
