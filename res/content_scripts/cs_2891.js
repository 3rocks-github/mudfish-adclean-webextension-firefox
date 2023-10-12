
function mudfish_adclean_b606f625ebcf6171f620c4f13b5642ab() {
  try {
    Sizzle(`section.main_left > div[style*="width:"][style*="text-align:"] ~ div[style^="margin-bottom:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b606f625ebcf6171f620c4f13b5642ab = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b606f625ebcf6171f620c4f13b5642ab, function (items) {
  if (mudfish_adclean_g_conf_b606f625ebcf6171f620c4f13b5642ab.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b606f625ebcf6171f620c4f13b5642ab();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
