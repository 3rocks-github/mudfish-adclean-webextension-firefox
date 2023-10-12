
function mudfish_adclean_96b7293e1b0c191fff6269bb683ae9c8() {
  try {
    Sizzle(`#wrap > div[style^="overflow:"][style$="background:#ddd;"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_96b7293e1b0c191fff6269bb683ae9c8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_96b7293e1b0c191fff6269bb683ae9c8, function (items) {
  if (mudfish_adclean_g_conf_96b7293e1b0c191fff6269bb683ae9c8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_96b7293e1b0c191fff6269bb683ae9c8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
