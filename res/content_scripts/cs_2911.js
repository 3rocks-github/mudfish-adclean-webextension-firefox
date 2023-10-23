
function mudfish_adclean_d756417fdd6e72db7d31cfa4e8a89023() {
  try {
    Sizzle(`#welcomeMainBanner_welcomeMain div[id*="_containerWrap_"]:has(img[src$="Banner/ad.jpg"])`).forEach(element => {
      element.style.remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d756417fdd6e72db7d31cfa4e8a89023 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d756417fdd6e72db7d31cfa4e8a89023, function (items) {
  if (mudfish_adclean_g_conf_d756417fdd6e72db7d31cfa4e8a89023.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d756417fdd6e72db7d31cfa4e8a89023();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d756417fdd6e72db7d31cfa4e8a89023();
    });
  }
});
