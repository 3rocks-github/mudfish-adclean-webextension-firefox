
function mudfish_adclean_2590f5e6c60eb470d31e7540e73f902d() {
  try {
    Sizzle(`div[class^="swiper-topbanner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2590f5e6c60eb470d31e7540e73f902d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2590f5e6c60eb470d31e7540e73f902d, function (items) {
  if (mudfish_adclean_g_conf_2590f5e6c60eb470d31e7540e73f902d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2590f5e6c60eb470d31e7540e73f902d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
