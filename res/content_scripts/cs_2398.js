
function mudfish_adclean_aa6506d9902a459200410da6910826af() {
  try {
    Sizzle(`#footer-wrapper div[id^="footer"].footer:has(img[src*="=s"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_aa6506d9902a459200410da6910826af = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_aa6506d9902a459200410da6910826af, function (items) {
  if (mudfish_adclean_g_conf_aa6506d9902a459200410da6910826af.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_aa6506d9902a459200410da6910826af();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
