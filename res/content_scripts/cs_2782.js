
function mudfish_adclean_0107a06ff068898138508e667e2ac6d7() {
  try {
    Sizzle(`.advertisement_area div[class^="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0107a06ff068898138508e667e2ac6d7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0107a06ff068898138508e667e2ac6d7, function (items) {
  if (mudfish_adclean_g_conf_0107a06ff068898138508e667e2ac6d7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0107a06ff068898138508e667e2ac6d7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
