
function mudfish_adclean_6a28791278e54eff1c06c62b144d4f9c() {
  try {
    Sizzle(`#_topBannerContainer`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6a28791278e54eff1c06c62b144d4f9c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6a28791278e54eff1c06c62b144d4f9c, function (items) {
  if (mudfish_adclean_g_conf_6a28791278e54eff1c06c62b144d4f9c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6a28791278e54eff1c06c62b144d4f9c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
