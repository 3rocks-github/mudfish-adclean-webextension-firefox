
function mudfish_adclean_e69984f01d552d1a890330a3993c8b8c() {
  try {
    Sizzle(`div[class*="_adArea"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e69984f01d552d1a890330a3993c8b8c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e69984f01d552d1a890330a3993c8b8c, function (items) {
  if (mudfish_adclean_g_conf_e69984f01d552d1a890330a3993c8b8c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e69984f01d552d1a890330a3993c8b8c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
