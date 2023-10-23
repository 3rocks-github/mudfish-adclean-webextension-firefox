
function mudfish_adclean_3f9e2c06034c799d79a9c6aed422c3a2() {
  try {
    Sizzle(`div[class^="mobileDaNs"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3f9e2c06034c799d79a9c6aed422c3a2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3f9e2c06034c799d79a9c6aed422c3a2, function (items) {
  if (mudfish_adclean_g_conf_3f9e2c06034c799d79a9c6aed422c3a2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3f9e2c06034c799d79a9c6aed422c3a2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3f9e2c06034c799d79a9c6aed422c3a2();
    });
  }
});
