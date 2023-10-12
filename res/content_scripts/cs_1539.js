
function mudfish_adclean_e351485cb976bb330255aeca1fa69be4() {
  try {
    Sizzle(`ul.masonry-2-col > li[class] ~ li:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e351485cb976bb330255aeca1fa69be4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e351485cb976bb330255aeca1fa69be4, function (items) {
  if (mudfish_adclean_g_conf_e351485cb976bb330255aeca1fa69be4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e351485cb976bb330255aeca1fa69be4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
