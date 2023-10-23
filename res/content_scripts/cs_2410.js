
function mudfish_adclean_c23428c42a39e1a5eb98b1b1eda214aa() {
  try {
    Sizzle(`div[class^="contents"] > div[class^="main_area"]:has(a[href*="ADRollingBanner"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c23428c42a39e1a5eb98b1b1eda214aa = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c23428c42a39e1a5eb98b1b1eda214aa, function (items) {
  if (mudfish_adclean_g_conf_c23428c42a39e1a5eb98b1b1eda214aa.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c23428c42a39e1a5eb98b1b1eda214aa();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c23428c42a39e1a5eb98b1b1eda214aa();
    });
  }
});
