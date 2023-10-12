
function mudfish_adclean_47ee52ada010ded297f57d3450e2a615() {
  try {
    Sizzle(`iframe[src*="//adv.khan.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_47ee52ada010ded297f57d3450e2a615 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_47ee52ada010ded297f57d3450e2a615, function (items) {
  if (mudfish_adclean_g_conf_47ee52ada010ded297f57d3450e2a615.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_47ee52ada010ded297f57d3450e2a615();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
