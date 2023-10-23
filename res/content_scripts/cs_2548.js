
function mudfish_adclean_505198a02af78f911340067a445a18b3() {
  try {
    Sizzle(`.section-lefttop-center:has(> .mule-today)`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_505198a02af78f911340067a445a18b3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_505198a02af78f911340067a445a18b3, function (items) {
  if (mudfish_adclean_g_conf_505198a02af78f911340067a445a18b3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_505198a02af78f911340067a445a18b3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_505198a02af78f911340067a445a18b3();
    });
  }
});
