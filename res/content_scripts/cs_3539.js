
function mudfish_adclean_1bca5c234331405f84a582c1ea0b9199() {
  try {
    Sizzle(`.widget-side .widget-title:has(+ div a[href^="/bbs/link.php?bo_table="][target="_blank"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1bca5c234331405f84a582c1ea0b9199 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1bca5c234331405f84a582c1ea0b9199, function (items) {
  if (mudfish_adclean_g_conf_1bca5c234331405f84a582c1ea0b9199.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1bca5c234331405f84a582c1ea0b9199();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1bca5c234331405f84a582c1ea0b9199();
    });
  }
});
