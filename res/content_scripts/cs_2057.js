
function mudfish_adclean_906545b5c33b3d953fbf0bcb18447d84() {
  try {
    Sizzle(`.srp-top-banner-container`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_906545b5c33b3d953fbf0bcb18447d84 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_906545b5c33b3d953fbf0bcb18447d84, function (items) {
  if (mudfish_adclean_g_conf_906545b5c33b3d953fbf0bcb18447d84.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_906545b5c33b3d953fbf0bcb18447d84();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_906545b5c33b3d953fbf0bcb18447d84();
    });
  }
});
