
function mudfish_adclean_68f60d7b7169e2789b81e9d530027c62() {
  try {
    Sizzle(`#overlay`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_68f60d7b7169e2789b81e9d530027c62 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_68f60d7b7169e2789b81e9d530027c62, function (items) {
  if (mudfish_adclean_g_conf_68f60d7b7169e2789b81e9d530027c62.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_68f60d7b7169e2789b81e9d530027c62();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
