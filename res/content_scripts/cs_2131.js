
function mudfish_adclean_f01d65c0da1e8877991d2e1e0637e953() {
  try {
    Sizzle(`div[class$="-banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f01d65c0da1e8877991d2e1e0637e953 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f01d65c0da1e8877991d2e1e0637e953, function (items) {
  if (mudfish_adclean_g_conf_f01d65c0da1e8877991d2e1e0637e953.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f01d65c0da1e8877991d2e1e0637e953();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
