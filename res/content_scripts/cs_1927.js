
function mudfish_adclean_59b3c9c8c49f7bece2c6004d48ef4e88() {
  try {
    Sizzle(`div[id^="popup_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_59b3c9c8c49f7bece2c6004d48ef4e88 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_59b3c9c8c49f7bece2c6004d48ef4e88, function (items) {
  if (mudfish_adclean_g_conf_59b3c9c8c49f7bece2c6004d48ef4e88.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_59b3c9c8c49f7bece2c6004d48ef4e88();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
