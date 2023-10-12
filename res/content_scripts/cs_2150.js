
function mudfish_adclean_cbcaa9335f7c0fb2cac04c8b57813e35() {
  try {
    Sizzle(`table[width][cellspacing] td[valign="top"] table[width][border="0"] td[height="100"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cbcaa9335f7c0fb2cac04c8b57813e35 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cbcaa9335f7c0fb2cac04c8b57813e35, function (items) {
  if (mudfish_adclean_g_conf_cbcaa9335f7c0fb2cac04c8b57813e35.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cbcaa9335f7c0fb2cac04c8b57813e35();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
