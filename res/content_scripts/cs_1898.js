
function mudfish_adclean_0fdcccf7c88b2bc15a379189cffd88fd() {
  try {
    Sizzle(`body > div[align] > div[align] > div[style] > div[style][align="center"] > table[style*="margin-top:5px;"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0fdcccf7c88b2bc15a379189cffd88fd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0fdcccf7c88b2bc15a379189cffd88fd, function (items) {
  if (mudfish_adclean_g_conf_0fdcccf7c88b2bc15a379189cffd88fd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0fdcccf7c88b2bc15a379189cffd88fd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
