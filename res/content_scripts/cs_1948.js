
function mudfish_adclean_5c63af60d60e0d358f8156af3bf98e64() {
  try {
    Sizzle(`section[id^="aside_"] > div[id$="-sticky-wrap"] > div[id$="-sticky"] > div[style]:not(class):not(id)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5c63af60d60e0d358f8156af3bf98e64 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5c63af60d60e0d358f8156af3bf98e64, function (items) {
  if (mudfish_adclean_g_conf_5c63af60d60e0d358f8156af3bf98e64.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5c63af60d60e0d358f8156af3bf98e64();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5c63af60d60e0d358f8156af3bf98e64();
    });
  }
});
