
function mudfish_adclean_575aefc714dad7495ead4c6921073afa() {
  try {
    Sizzle(`#__next header + section ~ div:has(article[style*="fit-content"] iframe[id^="google_ads_iframe_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_575aefc714dad7495ead4c6921073afa = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_575aefc714dad7495ead4c6921073afa, function (items) {
  if (mudfish_adclean_g_conf_575aefc714dad7495ead4c6921073afa.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_575aefc714dad7495ead4c6921073afa();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_575aefc714dad7495ead4c6921073afa();
    });
  }
});
