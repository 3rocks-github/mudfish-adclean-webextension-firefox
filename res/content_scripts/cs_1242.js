
function mudfish_adclean_809d823a215005723aaa425cfc5fb176() {
  try {
    Sizzle(`div[id^="dont"][style] ~ table[style^="width"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_809d823a215005723aaa425cfc5fb176 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_809d823a215005723aaa425cfc5fb176, function (items) {
  if (mudfish_adclean_g_conf_809d823a215005723aaa425cfc5fb176.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_809d823a215005723aaa425cfc5fb176();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
