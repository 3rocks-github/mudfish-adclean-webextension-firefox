
function mudfish_adclean_364db98757da034d6d8daaf75d6898e8() {
  try {
    Sizzle(`#newsstand ~ #feed.id_cargame .feed_box:has(span[class^="HighlightedColumnView-module__tag_ad_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_364db98757da034d6d8daaf75d6898e8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_364db98757da034d6d8daaf75d6898e8, function (items) {
  if (mudfish_adclean_g_conf_364db98757da034d6d8daaf75d6898e8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_364db98757da034d6d8daaf75d6898e8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_364db98757da034d6d8daaf75d6898e8();
    });
  }
});
