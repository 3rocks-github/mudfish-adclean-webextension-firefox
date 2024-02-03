
function mudfish_adclean_ed2d7c5d7695ed30960625c62f687813() {
  try {
    Sizzle(`a[class*="banner_link_"][target="_blank"] > img[class*="banner_image_"][src*="/Banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ed2d7c5d7695ed30960625c62f687813 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ed2d7c5d7695ed30960625c62f687813, function (items) {
  if (mudfish_adclean_g_conf_ed2d7c5d7695ed30960625c62f687813.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ed2d7c5d7695ed30960625c62f687813();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ed2d7c5d7695ed30960625c62f687813();
    });
  }
});
