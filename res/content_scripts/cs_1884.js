
function mudfish_adclean_9262fc0a8b42add4a0d21a4284c6e7a9() {
  try {
    Sizzle(`ins.dcmads`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9262fc0a8b42add4a0d21a4284c6e7a9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9262fc0a8b42add4a0d21a4284c6e7a9, function (items) {
  if (mudfish_adclean_g_conf_9262fc0a8b42add4a0d21a4284c6e7a9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9262fc0a8b42add4a0d21a4284c6e7a9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9262fc0a8b42add4a0d21a4284c6e7a9();
    });
  }
});
