
function mudfish_adclean_e24c7573847bd5eeb132f3f5bc484eb6() {
  try {
    Sizzle(`.wide_layout .wrap_srch_res [class*="prod_type2"]`).forEach(element => {
      element.style.width = "1275px !important";
element.style.borderLeft = "1px solid #e4e4e4 !important";
element.style.backgroundImage = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e24c7573847bd5eeb132f3f5bc484eb6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e24c7573847bd5eeb132f3f5bc484eb6, function (items) {
  if (mudfish_adclean_g_conf_e24c7573847bd5eeb132f3f5bc484eb6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e24c7573847bd5eeb132f3f5bc484eb6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e24c7573847bd5eeb132f3f5bc484eb6();
    });
  }
});
