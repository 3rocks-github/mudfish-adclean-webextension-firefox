
function mudfish_adclean_f370a0d367cf4b26ddd1991211eb7137() {
  try {
    Sizzle(`#contents > div[id^="bnrLink"].ma_visual_area.bnrContents ~ div:not(.smthp_infom):not(#productSrchListArea)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f370a0d367cf4b26ddd1991211eb7137 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f370a0d367cf4b26ddd1991211eb7137, function (items) {
  if (mudfish_adclean_g_conf_f370a0d367cf4b26ddd1991211eb7137.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f370a0d367cf4b26ddd1991211eb7137();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f370a0d367cf4b26ddd1991211eb7137();
    });
  }
});
