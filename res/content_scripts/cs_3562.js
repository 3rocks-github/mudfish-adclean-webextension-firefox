
function mudfish_adclean_e44ca0d5b0ddd86c87a75f3409e635f5() {
  try {
    Sizzle(`article > div[class]:not([class*=" "]) ~ div[class*=" "]:has(iframe[src*="arca.live/external/callad"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e44ca0d5b0ddd86c87a75f3409e635f5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e44ca0d5b0ddd86c87a75f3409e635f5, function (items) {
  if (mudfish_adclean_g_conf_e44ca0d5b0ddd86c87a75f3409e635f5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e44ca0d5b0ddd86c87a75f3409e635f5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e44ca0d5b0ddd86c87a75f3409e635f5();
    });
  }
});
