
function mudfish_adclean_876c44e4651d6458e99e3efca50cdb55() {
  try {
    Sizzle(`#viewConts > div[id^="articleBody"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_876c44e4651d6458e99e3efca50cdb55 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_876c44e4651d6458e99e3efca50cdb55, function (items) {
  if (mudfish_adclean_g_conf_876c44e4651d6458e99e3efca50cdb55.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_876c44e4651d6458e99e3efca50cdb55();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
