
function mudfish_adclean_f6f7e7ba98470df689e86c2150f45767() {
  try {
    Sizzle(`div[class^="article-adCover-div-"]`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f6f7e7ba98470df689e86c2150f45767 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f6f7e7ba98470df689e86c2150f45767, function (items) {
  if (mudfish_adclean_g_conf_f6f7e7ba98470df689e86c2150f45767.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f6f7e7ba98470df689e86c2150f45767();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
