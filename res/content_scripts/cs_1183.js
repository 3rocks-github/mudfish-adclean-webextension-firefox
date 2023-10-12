
function mudfish_adclean_ca2486b5e5dc5eded119b2876ac57e17() {
  try {
    Sizzle(`div[id*="-ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ca2486b5e5dc5eded119b2876ac57e17 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ca2486b5e5dc5eded119b2876ac57e17, function (items) {
  if (mudfish_adclean_g_conf_ca2486b5e5dc5eded119b2876ac57e17.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ca2486b5e5dc5eded119b2876ac57e17();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
