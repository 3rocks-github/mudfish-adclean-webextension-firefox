
function mudfish_adclean_691fba7344e800eb75e8616cb7f22719() {
  try {
    Sizzle(`.article_area > .article_right`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_691fba7344e800eb75e8616cb7f22719 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_691fba7344e800eb75e8616cb7f22719, function (items) {
  if (mudfish_adclean_g_conf_691fba7344e800eb75e8616cb7f22719.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_691fba7344e800eb75e8616cb7f22719();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_691fba7344e800eb75e8616cb7f22719();
    });
  }
});
