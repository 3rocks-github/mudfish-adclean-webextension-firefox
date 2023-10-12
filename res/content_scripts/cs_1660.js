
function mudfish_adclean_51e15b50514db65b7b7a919d0a374a09() {
  try {
    Sizzle(`.news > div[class$="_ad"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_51e15b50514db65b7b7a919d0a374a09 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_51e15b50514db65b7b7a919d0a374a09, function (items) {
  if (mudfish_adclean_g_conf_51e15b50514db65b7b7a919d0a374a09.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_51e15b50514db65b7b7a919d0a374a09();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
