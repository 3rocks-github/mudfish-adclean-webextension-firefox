
function mudfish_adclean_f0637a8d7096a14f7090a9d05d0b69d9() {
  try {
    Sizzle(`div[class^="style_section_row_"] > div[class*=" asideItem_active_"]:has(a[class^="adRecommend_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f0637a8d7096a14f7090a9d05d0b69d9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f0637a8d7096a14f7090a9d05d0b69d9, function (items) {
  if (mudfish_adclean_g_conf_f0637a8d7096a14f7090a9d05d0b69d9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f0637a8d7096a14f7090a9d05d0b69d9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f0637a8d7096a14f7090a9d05d0b69d9();
    });
  }
});
