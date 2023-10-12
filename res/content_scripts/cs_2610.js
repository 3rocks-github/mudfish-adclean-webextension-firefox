
function mudfish_adclean_2f9d0b9640c54a97fa1de08bd51e6667() {
  try {
    Sizzle(`.adsbygoogle`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2f9d0b9640c54a97fa1de08bd51e6667 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2f9d0b9640c54a97fa1de08bd51e6667, function (items) {
  if (mudfish_adclean_g_conf_2f9d0b9640c54a97fa1de08bd51e6667.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2f9d0b9640c54a97fa1de08bd51e6667();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
