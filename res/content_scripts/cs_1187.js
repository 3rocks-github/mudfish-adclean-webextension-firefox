
function mudfish_adclean_cc1fe1c21f41e4a888181c0788eba76d() {
  try {
    Sizzle(`div[id^="Banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cc1fe1c21f41e4a888181c0788eba76d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cc1fe1c21f41e4a888181c0788eba76d, function (items) {
  if (mudfish_adclean_g_conf_cc1fe1c21f41e4a888181c0788eba76d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cc1fe1c21f41e4a888181c0788eba76d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
