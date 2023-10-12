
function mudfish_adclean_c89cb8b195d791d8b2ed017ea9a51243() {
  try {
    Sizzle(`div[class^="banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c89cb8b195d791d8b2ed017ea9a51243 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c89cb8b195d791d8b2ed017ea9a51243, function (items) {
  if (mudfish_adclean_g_conf_c89cb8b195d791d8b2ed017ea9a51243.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c89cb8b195d791d8b2ed017ea9a51243();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
