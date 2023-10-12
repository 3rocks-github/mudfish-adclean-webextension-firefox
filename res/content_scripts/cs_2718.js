
function mudfish_adclean_8ec0a5df1117fa051125b7f1bfc4b16b() {
  try {
    Sizzle(`.body.mwcphide`).forEach(element => {
      element.style.height = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8ec0a5df1117fa051125b7f1bfc4b16b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8ec0a5df1117fa051125b7f1bfc4b16b, function (items) {
  if (mudfish_adclean_g_conf_8ec0a5df1117fa051125b7f1bfc4b16b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8ec0a5df1117fa051125b7f1bfc4b16b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
