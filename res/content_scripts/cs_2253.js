
function mudfish_adclean_1f7d6d94f6d871b1cabbeede3cc614ed() {
  try {
    Sizzle(`div[class*="-banner-"]`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1f7d6d94f6d871b1cabbeede3cc614ed = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1f7d6d94f6d871b1cabbeede3cc614ed, function (items) {
  if (mudfish_adclean_g_conf_1f7d6d94f6d871b1cabbeede3cc614ed.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1f7d6d94f6d871b1cabbeede3cc614ed();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
