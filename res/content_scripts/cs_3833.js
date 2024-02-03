
function mudfish_adclean_c8d6509a8de854bd891e02240956fd94() {
  try {
    Sizzle(`#map_area`).forEach(element => {
      element.style.height = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c8d6509a8de854bd891e02240956fd94 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c8d6509a8de854bd891e02240956fd94, function (items) {
  if (mudfish_adclean_g_conf_c8d6509a8de854bd891e02240956fd94.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c8d6509a8de854bd891e02240956fd94();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c8d6509a8de854bd891e02240956fd94();
    });
  }
});
