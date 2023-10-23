
function mudfish_adclean_6a2a3c3d51ad666fed3d83b20e0b4633() {
  try {
    Sizzle(`.atc_ex`).forEach(element => {
      element.style.height = "auto !important";
element.style.overflow = "visible !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6a2a3c3d51ad666fed3d83b20e0b4633 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6a2a3c3d51ad666fed3d83b20e0b4633, function (items) {
  if (mudfish_adclean_g_conf_6a2a3c3d51ad666fed3d83b20e0b4633.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6a2a3c3d51ad666fed3d83b20e0b4633();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6a2a3c3d51ad666fed3d83b20e0b4633();
    });
  }
});
