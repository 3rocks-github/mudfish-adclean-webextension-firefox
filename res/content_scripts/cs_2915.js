
function mudfish_adclean_9ea07bfce3e51759ddca20c5a254019a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.welcome_banner_inner li.swiper-slide:has(img[src*="image.kyobobook.co.kr/newimages/adcenter/"])`).forEach(element => {
        element.style.remove = "true";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9ea07bfce3e51759ddca20c5a254019a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9ea07bfce3e51759ddca20c5a254019a();
  });
}
