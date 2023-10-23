
function mudfish_adclean_0d14acd3f99624acbd16345d8c728db4() {
  try {
    Sizzle(`.box__login .box__login-member`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0d14acd3f99624acbd16345d8c728db4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0d14acd3f99624acbd16345d8c728db4, function (items) {
  if (mudfish_adclean_g_conf_0d14acd3f99624acbd16345d8c728db4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0d14acd3f99624acbd16345d8c728db4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0d14acd3f99624acbd16345d8c728db4();
    });
  }
});
