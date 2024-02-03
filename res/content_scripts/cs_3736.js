
function mudfish_adclean_cd2f3a53389b79f0b0d33c9c91f7b321() {
  try {
    Sizzle(`.main_grid_item> div[class*="_promotion__"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cd2f3a53389b79f0b0d33c9c91f7b321 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cd2f3a53389b79f0b0d33c9c91f7b321, function (items) {
  if (mudfish_adclean_g_conf_cd2f3a53389b79f0b0d33c9c91f7b321.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cd2f3a53389b79f0b0d33c9c91f7b321();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cd2f3a53389b79f0b0d33c9c91f7b321();
    });
  }
});
