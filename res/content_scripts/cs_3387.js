
function mudfish_adclean_87af94bc9276affde97f6e33818c5524() {
  try {
    Sizzle(`.view3_box > .sp_pdt_wrap:has(div[data-url*="//link.coupang.com/"].coupang_layer)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_87af94bc9276affde97f6e33818c5524 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_87af94bc9276affde97f6e33818c5524, function (items) {
  if (mudfish_adclean_g_conf_87af94bc9276affde97f6e33818c5524.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_87af94bc9276affde97f6e33818c5524();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
