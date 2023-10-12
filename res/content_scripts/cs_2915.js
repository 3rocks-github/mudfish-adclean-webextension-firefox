
function mudfish_adclean_9ea07bfce3e51759ddca20c5a254019a() {
  try {
    Sizzle(`.welcome_banner_inner li.swiper-slide:has(img[src*="image.kyobobook.co.kr/newimages/adcenter/"])`).forEach(element => {
      element.style.remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9ea07bfce3e51759ddca20c5a254019a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9ea07bfce3e51759ddca20c5a254019a, function (items) {
  if (mudfish_adclean_g_conf_9ea07bfce3e51759ddca20c5a254019a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9ea07bfce3e51759ddca20c5a254019a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
