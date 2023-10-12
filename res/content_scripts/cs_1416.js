
function mudfish_adclean_7d1b7b0ec1accdc495e9a224e496f778() {
  try {
    Sizzle(`div[class$="_ban"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7d1b7b0ec1accdc495e9a224e496f778 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7d1b7b0ec1accdc495e9a224e496f778, function (items) {
  if (mudfish_adclean_g_conf_7d1b7b0ec1accdc495e9a224e496f778.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7d1b7b0ec1accdc495e9a224e496f778();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
