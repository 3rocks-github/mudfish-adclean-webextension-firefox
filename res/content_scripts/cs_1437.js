
function mudfish_adclean_dac3fcded3f221e1039437042c09e883() {
  try {
    Sizzle(`div[id^="block-"][class^="block-content-"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_dac3fcded3f221e1039437042c09e883 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_dac3fcded3f221e1039437042c09e883, function (items) {
  if (mudfish_adclean_g_conf_dac3fcded3f221e1039437042c09e883.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_dac3fcded3f221e1039437042c09e883();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
