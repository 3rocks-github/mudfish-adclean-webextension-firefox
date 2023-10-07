
function mudfish_adclean_c27b7932bd5b2884e50a96bd93837223() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="bodyDialog"]:not([style*="top: "]).open:has(img[src*="kyobobook.co.kr/newimages/adcenter"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c27b7932bd5b2884e50a96bd93837223();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c27b7932bd5b2884e50a96bd93837223();
  });
}
