
function mudfish_adclean_889dd909ae712b0d0e9eb801845a29d7() {
  try {
    Sizzle(`#__next > div:not([class]):not([id]) > div[style^="position:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_889dd909ae712b0d0e9eb801845a29d7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_889dd909ae712b0d0e9eb801845a29d7, function (items) {
  if (mudfish_adclean_g_conf_889dd909ae712b0d0e9eb801845a29d7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_889dd909ae712b0d0e9eb801845a29d7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_889dd909ae712b0d0e9eb801845a29d7();
    });
  }
});
