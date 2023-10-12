
function mudfish_adclean_23345bb300d5c10050369c1272e8c99f() {
  try {
    Sizzle(`li[class^="ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_23345bb300d5c10050369c1272e8c99f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_23345bb300d5c10050369c1272e8c99f, function (items) {
  if (mudfish_adclean_g_conf_23345bb300d5c10050369c1272e8c99f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_23345bb300d5c10050369c1272e8c99f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
