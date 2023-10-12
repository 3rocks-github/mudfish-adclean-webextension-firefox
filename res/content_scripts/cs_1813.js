
function mudfish_adclean_5bde916d793eb42f0dcdc4202b90c2f1() {
  try {
    Sizzle(`.cpz_inner .category_set_area div[class^="second_cate_area"] div[class^="catebnr_area"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5bde916d793eb42f0dcdc4202b90c2f1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5bde916d793eb42f0dcdc4202b90c2f1, function (items) {
  if (mudfish_adclean_g_conf_5bde916d793eb42f0dcdc4202b90c2f1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5bde916d793eb42f0dcdc4202b90c2f1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
