
function mudfish_adclean_0b2061d5c0463f887de300c53d4ad4d4() {
  try {
    Sizzle(`.td-is-sticky > .wpb_wrapper`).forEach(element => {
      element.style.top = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0b2061d5c0463f887de300c53d4ad4d4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0b2061d5c0463f887de300c53d4ad4d4, function (items) {
  if (mudfish_adclean_g_conf_0b2061d5c0463f887de300c53d4ad4d4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0b2061d5c0463f887de300c53d4ad4d4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0b2061d5c0463f887de300c53d4ad4d4();
    });
  }
});
