
function mudfish_adclean_08bff9298abb6eb6ca73e99c0abd9224() {
  try {
    Sizzle(`.obituaries-wrapper:has(img[src^="/images/AdImage/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_08bff9298abb6eb6ca73e99c0abd9224 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_08bff9298abb6eb6ca73e99c0abd9224, function (items) {
  if (mudfish_adclean_g_conf_08bff9298abb6eb6ca73e99c0abd9224.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_08bff9298abb6eb6ca73e99c0abd9224();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_08bff9298abb6eb6ca73e99c0abd9224();
    });
  }
});
