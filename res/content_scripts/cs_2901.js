
function mudfish_adclean_db1981b1704f55012e8b343f6595c12e() {
  try {
    Sizzle(`#newsSidebar > div[class*="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_db1981b1704f55012e8b343f6595c12e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_db1981b1704f55012e8b343f6595c12e, function (items) {
  if (mudfish_adclean_g_conf_db1981b1704f55012e8b343f6595c12e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_db1981b1704f55012e8b343f6595c12e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
