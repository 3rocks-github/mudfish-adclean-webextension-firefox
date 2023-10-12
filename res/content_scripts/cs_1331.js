
function mudfish_adclean_69fcb3a406f8d56dc872d6dcf7faffd0() {
  try {
    Sizzle(`iframe[data-ezsrc*="//coupa.ng/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_69fcb3a406f8d56dc872d6dcf7faffd0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_69fcb3a406f8d56dc872d6dcf7faffd0, function (items) {
  if (mudfish_adclean_g_conf_69fcb3a406f8d56dc872d6dcf7faffd0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_69fcb3a406f8d56dc872d6dcf7faffd0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
