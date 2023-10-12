
function mudfish_adclean_a5e0171a6093d93b998c2de4e2a9aa3d() {
  try {
    Sizzle(`.fancybox-wrap:has(> .fancybox-skin > div > div > #dialoga.wst_ad_badge)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a5e0171a6093d93b998c2de4e2a9aa3d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a5e0171a6093d93b998c2de4e2a9aa3d, function (items) {
  if (mudfish_adclean_g_conf_a5e0171a6093d93b998c2de4e2a9aa3d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a5e0171a6093d93b998c2de4e2a9aa3d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
