
function mudfish_adclean_1f99391cdb697ff9490e7b75d85921a8() {
  try {
    Sizzle(`#zzbang_img`).forEach(element => {
      element.style.display = "block !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1f99391cdb697ff9490e7b75d85921a8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1f99391cdb697ff9490e7b75d85921a8, function (items) {
  if (mudfish_adclean_g_conf_1f99391cdb697ff9490e7b75d85921a8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1f99391cdb697ff9490e7b75d85921a8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1f99391cdb697ff9490e7b75d85921a8();
    });
  }
});
