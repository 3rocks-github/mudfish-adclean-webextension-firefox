
function mudfish_adclean_fef0367ebdaf87cb06333f2a5522d82d() {
  try {
    Sizzle(`body .td-header-wrap`).forEach(element => {
      element.style.marginTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fef0367ebdaf87cb06333f2a5522d82d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fef0367ebdaf87cb06333f2a5522d82d, function (items) {
  if (mudfish_adclean_g_conf_fef0367ebdaf87cb06333f2a5522d82d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fef0367ebdaf87cb06333f2a5522d82d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fef0367ebdaf87cb06333f2a5522d82d();
    });
  }
});
