
function mudfish_adclean_c41c3ab4b848ef336c18385f939968aa() {
  try {
    Sizzle(`iframe[src*="tf.co.kr/public/layout/"][src*="/top_menu_bar_"][src*=".php"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c41c3ab4b848ef336c18385f939968aa = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c41c3ab4b848ef336c18385f939968aa, function (items) {
  if (mudfish_adclean_g_conf_c41c3ab4b848ef336c18385f939968aa.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c41c3ab4b848ef336c18385f939968aa();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c41c3ab4b848ef336c18385f939968aa();
    });
  }
});
