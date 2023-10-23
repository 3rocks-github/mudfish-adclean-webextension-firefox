
function mudfish_adclean_8b0a2cc8dc7a3a46312640c46be8e67d() {
  try {
    Sizzle(`aside > hr[class]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8b0a2cc8dc7a3a46312640c46be8e67d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8b0a2cc8dc7a3a46312640c46be8e67d, function (items) {
  if (mudfish_adclean_g_conf_8b0a2cc8dc7a3a46312640c46be8e67d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8b0a2cc8dc7a3a46312640c46be8e67d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8b0a2cc8dc7a3a46312640c46be8e67d();
    });
  }
});
