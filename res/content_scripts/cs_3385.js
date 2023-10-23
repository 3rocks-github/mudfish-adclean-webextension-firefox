
function mudfish_adclean_1ca91d33a690dbb512870c4173cf7a44() {
  try {
    Sizzle(`html[style*="background-image: url(//upload.tgd.kr/"]:not(.darkmode)`).forEach(element => {
      element.style.backgroundImage = "none !important";
element.style.backgroundColor = "#f3f2f0 !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1ca91d33a690dbb512870c4173cf7a44 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1ca91d33a690dbb512870c4173cf7a44, function (items) {
  if (mudfish_adclean_g_conf_1ca91d33a690dbb512870c4173cf7a44.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1ca91d33a690dbb512870c4173cf7a44();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1ca91d33a690dbb512870c4173cf7a44();
    });
  }
});
