
function mudfish_adclean_64e7d34ada1840c01a800eccde20c7a5() {
  try {
    Sizzle(`[style]#withpang_p`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_64e7d34ada1840c01a800eccde20c7a5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_64e7d34ada1840c01a800eccde20c7a5, function (items) {
  if (mudfish_adclean_g_conf_64e7d34ada1840c01a800eccde20c7a5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_64e7d34ada1840c01a800eccde20c7a5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
