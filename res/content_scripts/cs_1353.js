
function mudfish_adclean_f4ad0cbda514c2abf282e292001f5b93() {
  try {
    Sizzle(`.right--inner > div[class^="bnr_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f4ad0cbda514c2abf282e292001f5b93 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f4ad0cbda514c2abf282e292001f5b93, function (items) {
  if (mudfish_adclean_g_conf_f4ad0cbda514c2abf282e292001f5b93.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f4ad0cbda514c2abf282e292001f5b93();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
