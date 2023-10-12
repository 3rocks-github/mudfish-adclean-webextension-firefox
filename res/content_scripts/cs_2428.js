
function mudfish_adclean_55a85d7452b3652b75c664e1561f7d46() {
  try {
    Sizzle(`#region--content_floating ~ #region--content_body div[module-design-id]:has(.button--power_click)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_55a85d7452b3652b75c664e1561f7d46 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_55a85d7452b3652b75c664e1561f7d46, function (items) {
  if (mudfish_adclean_g_conf_55a85d7452b3652b75c664e1561f7d46.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_55a85d7452b3652b75c664e1561f7d46();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
