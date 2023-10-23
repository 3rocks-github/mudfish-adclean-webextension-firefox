
function mudfish_adclean_51fd7c8f5a254958de64533df135e26d() {
  try {
    Sizzle(`#article-list > .notice:has(.list-header:contains(AD))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_51fd7c8f5a254958de64533df135e26d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_51fd7c8f5a254958de64533df135e26d, function (items) {
  if (mudfish_adclean_g_conf_51fd7c8f5a254958de64533df135e26d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_51fd7c8f5a254958de64533df135e26d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_51fd7c8f5a254958de64533df135e26d();
    });
  }
});
