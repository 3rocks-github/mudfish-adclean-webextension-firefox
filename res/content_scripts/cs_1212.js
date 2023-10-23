
function mudfish_adclean_1f7f5309df8fdffa14938169052e76bf() {
  try {
    Sizzle(`.area_real_news article.gdn`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1f7f5309df8fdffa14938169052e76bf = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1f7f5309df8fdffa14938169052e76bf, function (items) {
  if (mudfish_adclean_g_conf_1f7f5309df8fdffa14938169052e76bf.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1f7f5309df8fdffa14938169052e76bf();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1f7f5309df8fdffa14938169052e76bf();
    });
  }
});
