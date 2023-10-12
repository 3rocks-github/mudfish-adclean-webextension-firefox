
function mudfish_adclean_59f5092358ab3aa5dbaafc64b0b07036() {
  try {
    Sizzle(`[id^="li"] > [id]:has(span ~ div img[src$="_ad.gif"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_59f5092358ab3aa5dbaafc64b0b07036 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_59f5092358ab3aa5dbaafc64b0b07036, function (items) {
  if (mudfish_adclean_g_conf_59f5092358ab3aa5dbaafc64b0b07036.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_59f5092358ab3aa5dbaafc64b0b07036();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
