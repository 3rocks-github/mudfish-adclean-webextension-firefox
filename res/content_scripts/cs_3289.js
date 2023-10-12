
function mudfish_adclean_67c0c26d22157cdd5d0b6238bdf9e9e8() {
  try {
    Sizzle(`div[id^="div_new_power_link_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_67c0c26d22157cdd5d0b6238bdf9e9e8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_67c0c26d22157cdd5d0b6238bdf9e9e8, function (items) {
  if (mudfish_adclean_g_conf_67c0c26d22157cdd5d0b6238bdf9e9e8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_67c0c26d22157cdd5d0b6238bdf9e9e8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
