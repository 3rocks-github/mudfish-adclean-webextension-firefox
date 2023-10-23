
function mudfish_adclean_3860f39b681752f0b381250593113074() {
  try {
    Sizzle(`div[style^="margin-top:"].survey`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3860f39b681752f0b381250593113074 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3860f39b681752f0b381250593113074, function (items) {
  if (mudfish_adclean_g_conf_3860f39b681752f0b381250593113074.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3860f39b681752f0b381250593113074();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3860f39b681752f0b381250593113074();
    });
  }
});
