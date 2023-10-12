
function mudfish_adclean_a04a248e277657745b383942cac91ae4() {
  try {
    Sizzle(`ul > li[class^="ad_"][id^="snsAd_area"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a04a248e277657745b383942cac91ae4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a04a248e277657745b383942cac91ae4, function (items) {
  if (mudfish_adclean_g_conf_a04a248e277657745b383942cac91ae4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a04a248e277657745b383942cac91ae4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
