
function mudfish_adclean_01d41186df5ea70aa783a6cba85cde47() {
  try {
    Sizzle(`.main_contents > div[class^="sc-"]:has(img[src*="//cdnimg.happyshopping.kr/img_ad/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_01d41186df5ea70aa783a6cba85cde47 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_01d41186df5ea70aa783a6cba85cde47, function (items) {
  if (mudfish_adclean_g_conf_01d41186df5ea70aa783a6cba85cde47.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_01d41186df5ea70aa783a6cba85cde47();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
