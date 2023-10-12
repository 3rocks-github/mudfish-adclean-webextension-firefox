
function mudfish_adclean_98622e1348b1efa23dcb0fc7dffa423b() {
  try {
    Sizzle(`#wrap_cnts td[valign="top"] #wrap_ctgr_new > div[id]`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_98622e1348b1efa23dcb0fc7dffa423b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_98622e1348b1efa23dcb0fc7dffa423b, function (items) {
  if (mudfish_adclean_g_conf_98622e1348b1efa23dcb0fc7dffa423b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_98622e1348b1efa23dcb0fc7dffa423b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
