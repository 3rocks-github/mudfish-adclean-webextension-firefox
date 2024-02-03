
function mudfish_adclean_24e8cf29955210bcd4808d429ceaafc8() {
  try {
    Sizzle(`div[class$="mobile-banner"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_24e8cf29955210bcd4808d429ceaafc8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_24e8cf29955210bcd4808d429ceaafc8, function (items) {
  if (mudfish_adclean_g_conf_24e8cf29955210bcd4808d429ceaafc8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_24e8cf29955210bcd4808d429ceaafc8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_24e8cf29955210bcd4808d429ceaafc8();
    });
  }
});
