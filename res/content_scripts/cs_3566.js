
function mudfish_adclean_c0b842ba9262c7499781d9d9313bfcc4() {
  try {
    Sizzle(`article > div[class]:not([class*=" "]) ~ div[class*=" "]:has(iframe[id^="google_ads_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c0b842ba9262c7499781d9d9313bfcc4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c0b842ba9262c7499781d9d9313bfcc4, function (items) {
  if (mudfish_adclean_g_conf_c0b842ba9262c7499781d9d9313bfcc4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c0b842ba9262c7499781d9d9313bfcc4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c0b842ba9262c7499781d9d9313bfcc4();
    });
  }
});
