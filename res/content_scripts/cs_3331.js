
function mudfish_adclean_6bc2613e7f51cd9d86855148f34040fa() {
  try {
    Sizzle(`.xe_content span ~ div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6bc2613e7f51cd9d86855148f34040fa = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6bc2613e7f51cd9d86855148f34040fa, function (items) {
  if (mudfish_adclean_g_conf_6bc2613e7f51cd9d86855148f34040fa.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6bc2613e7f51cd9d86855148f34040fa();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
