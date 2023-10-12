
function mudfish_adclean_b3f72354d39ea72eb63c8881b4d0342e() {
  try {
    Sizzle(`.swiper-slide-active .part-visible-normal:has(img[src*="//static.marketinven.com/data/brand/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b3f72354d39ea72eb63c8881b4d0342e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b3f72354d39ea72eb63c8881b4d0342e, function (items) {
  if (mudfish_adclean_g_conf_b3f72354d39ea72eb63c8881b4d0342e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b3f72354d39ea72eb63c8881b4d0342e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
