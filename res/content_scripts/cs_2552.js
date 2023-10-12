
function mudfish_adclean_a5ab5722b715f6284bd7f8f0e3d04e32() {
  try {
    Sizzle(`article[data-list-container="searchList"] li:has(span:contains(AD).gray_round_badge)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a5ab5722b715f6284bd7f8f0e3d04e32 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a5ab5722b715f6284bd7f8f0e3d04e32, function (items) {
  if (mudfish_adclean_g_conf_a5ab5722b715f6284bd7f8f0e3d04e32.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a5ab5722b715f6284bd7f8f0e3d04e32();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
