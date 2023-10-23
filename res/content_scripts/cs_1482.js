
function mudfish_adclean_e2d5c0db8bdc433a6535c980e1aa0678() {
  try {
    Sizzle(`ul[class^="bn_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e2d5c0db8bdc433a6535c980e1aa0678 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e2d5c0db8bdc433a6535c980e1aa0678, function (items) {
  if (mudfish_adclean_g_conf_e2d5c0db8bdc433a6535c980e1aa0678.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e2d5c0db8bdc433a6535c980e1aa0678();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e2d5c0db8bdc433a6535c980e1aa0678();
    });
  }
});
