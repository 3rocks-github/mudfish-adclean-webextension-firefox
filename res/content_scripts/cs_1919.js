
function mudfish_adclean_621dca219987e4b26a4670a92f6a5e94() {
  try {
    Sizzle(`div[class^="ads_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_621dca219987e4b26a4670a92f6a5e94 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_621dca219987e4b26a4670a92f6a5e94, function (items) {
  if (mudfish_adclean_g_conf_621dca219987e4b26a4670a92f6a5e94.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_621dca219987e4b26a4670a92f6a5e94();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
