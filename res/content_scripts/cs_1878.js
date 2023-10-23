
function mudfish_adclean_8c45a003e485513116be174f2cd93bd3() {
  try {
    Sizzle(`.blockUI.blockOverlay`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8c45a003e485513116be174f2cd93bd3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8c45a003e485513116be174f2cd93bd3, function (items) {
  if (mudfish_adclean_g_conf_8c45a003e485513116be174f2cd93bd3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8c45a003e485513116be174f2cd93bd3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8c45a003e485513116be174f2cd93bd3();
    });
  }
});
