
function mudfish_adclean_a1b2e90493d5d53f207e9426e3fe0b4e() {
  try {
    Sizzle(`#newsSidebar > div[class$="AD"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a1b2e90493d5d53f207e9426e3fe0b4e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a1b2e90493d5d53f207e9426e3fe0b4e, function (items) {
  if (mudfish_adclean_g_conf_a1b2e90493d5d53f207e9426e3fe0b4e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a1b2e90493d5d53f207e9426e3fe0b4e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
