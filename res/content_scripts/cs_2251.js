
function mudfish_adclean_cdcc5eee6455918975b43b12f9bd9073() {
  try {
    Sizzle(`.layout-main .panel.no-margin`).forEach(element => {
      element.style.paddingTop = "50px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cdcc5eee6455918975b43b12f9bd9073 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cdcc5eee6455918975b43b12f9bd9073, function (items) {
  if (mudfish_adclean_g_conf_cdcc5eee6455918975b43b12f9bd9073.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cdcc5eee6455918975b43b12f9bd9073();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cdcc5eee6455918975b43b12f9bd9073();
    });
  }
});
