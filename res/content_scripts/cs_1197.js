
function mudfish_adclean_362da77f30df8a4fd8a9fa2555c31f77() {
  try {
    Sizzle(`#ly_subb`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_362da77f30df8a4fd8a9fa2555c31f77 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_362da77f30df8a4fd8a9fa2555c31f77, function (items) {
  if (mudfish_adclean_g_conf_362da77f30df8a4fd8a9fa2555c31f77.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_362da77f30df8a4fd8a9fa2555c31f77();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
