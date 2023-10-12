
function mudfish_adclean_532f2dc7baef74d69c7ecf8636c73d02() {
  try {
    Sizzle(`div[id^="banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_532f2dc7baef74d69c7ecf8636c73d02 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_532f2dc7baef74d69c7ecf8636c73d02, function (items) {
  if (mudfish_adclean_g_conf_532f2dc7baef74d69c7ecf8636c73d02.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_532f2dc7baef74d69c7ecf8636c73d02();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
