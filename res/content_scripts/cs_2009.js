
function mudfish_adclean_e814d4791f3bafcb8a3b705992aa152e() {
  try {
    Sizzle(`div.warp > a[href*="//someblossom.co.kr/product/detail.html?"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e814d4791f3bafcb8a3b705992aa152e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e814d4791f3bafcb8a3b705992aa152e, function (items) {
  if (mudfish_adclean_g_conf_e814d4791f3bafcb8a3b705992aa152e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e814d4791f3bafcb8a3b705992aa152e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
