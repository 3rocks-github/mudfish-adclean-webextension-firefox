
function mudfish_adclean_c1791cf39693acee5068aad01e8ba2de() {
  try {
    Sizzle(`div[class] > div[id]:not([class]):has(> iframe[id^="google_ads_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c1791cf39693acee5068aad01e8ba2de = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c1791cf39693acee5068aad01e8ba2de, function (items) {
  if (mudfish_adclean_g_conf_c1791cf39693acee5068aad01e8ba2de.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c1791cf39693acee5068aad01e8ba2de();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
