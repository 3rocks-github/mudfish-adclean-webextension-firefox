
function mudfish_adclean_533502c570c5c3073db7b8fc8c030d50() {
  try {
    Sizzle(`section.search_deallist > .deallist_wrap > ul > li[class]:has(> a[href*="//display.admonseller.com/"].anchor)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_533502c570c5c3073db7b8fc8c030d50 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_533502c570c5c3073db7b8fc8c030d50, function (items) {
  if (mudfish_adclean_g_conf_533502c570c5c3073db7b8fc8c030d50.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_533502c570c5c3073db7b8fc8c030d50();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_533502c570c5c3073db7b8fc8c030d50();
    });
  }
});
