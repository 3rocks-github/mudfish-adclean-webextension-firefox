
function mudfish_adclean_76ce933a0007341861c3416ccff86fd6() {
  try {
    Sizzle(`div[id$="_sponser"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_76ce933a0007341861c3416ccff86fd6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_76ce933a0007341861c3416ccff86fd6, function (items) {
  if (mudfish_adclean_g_conf_76ce933a0007341861c3416ccff86fd6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_76ce933a0007341861c3416ccff86fd6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_76ce933a0007341861c3416ccff86fd6();
    });
  }
});
