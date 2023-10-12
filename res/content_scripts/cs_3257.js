
function mudfish_adclean_c27b7932bd5b2884e50a96bd93837223() {
  try {
    Sizzle(`div[id^="bodyDialog"]:not([style*="top: "]).open:has(img[src*="kyobobook.co.kr/newimages/adcenter"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c27b7932bd5b2884e50a96bd93837223 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c27b7932bd5b2884e50a96bd93837223, function (items) {
  if (mudfish_adclean_g_conf_c27b7932bd5b2884e50a96bd93837223.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c27b7932bd5b2884e50a96bd93837223();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
