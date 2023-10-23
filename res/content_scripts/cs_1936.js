
function mudfish_adclean_365727c31e0b9a5da1d425c0e769dc89() {
  try {
    Sizzle(`iframe[src^="/main_contents/main_banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_365727c31e0b9a5da1d425c0e769dc89 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_365727c31e0b9a5da1d425c0e769dc89, function (items) {
  if (mudfish_adclean_g_conf_365727c31e0b9a5da1d425c0e769dc89.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_365727c31e0b9a5da1d425c0e769dc89();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_365727c31e0b9a5da1d425c0e769dc89();
    });
  }
});
