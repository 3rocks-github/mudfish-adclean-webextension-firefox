
function mudfish_adclean_1949111229bc3ea7c57d5d17fc6d1fdb() {
  try {
    Sizzle(`section[class*="_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1949111229bc3ea7c57d5d17fc6d1fdb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1949111229bc3ea7c57d5d17fc6d1fdb, function (items) {
  if (mudfish_adclean_g_conf_1949111229bc3ea7c57d5d17fc6d1fdb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1949111229bc3ea7c57d5d17fc6d1fdb();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
