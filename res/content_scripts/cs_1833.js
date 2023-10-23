
function mudfish_adclean_373b0df65be6c1783641eba97dd91f44() {
  try {
    Sizzle(`.topBannerUse`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_373b0df65be6c1783641eba97dd91f44 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_373b0df65be6c1783641eba97dd91f44, function (items) {
  if (mudfish_adclean_g_conf_373b0df65be6c1783641eba97dd91f44.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_373b0df65be6c1783641eba97dd91f44();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_373b0df65be6c1783641eba97dd91f44();
    });
  }
});
