
function mudfish_adclean_e6e712741745797f9443686d97bea7b9() {
  try {
    Sizzle(`#edailywrap > #headers ~ div[style*="height: "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e6e712741745797f9443686d97bea7b9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e6e712741745797f9443686d97bea7b9, function (items) {
  if (mudfish_adclean_g_conf_e6e712741745797f9443686d97bea7b9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e6e712741745797f9443686d97bea7b9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e6e712741745797f9443686d97bea7b9();
    });
  }
});
