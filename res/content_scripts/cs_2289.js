
function mudfish_adclean_587530e2947ae35681162f456c284ecb() {
  try {
    Sizzle(`div[ng-if] > .lawyers-section.has-border-bottom`).forEach(element => {
      element.style.height = "250px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_587530e2947ae35681162f456c284ecb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_587530e2947ae35681162f456c284ecb, function (items) {
  if (mudfish_adclean_g_conf_587530e2947ae35681162f456c284ecb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_587530e2947ae35681162f456c284ecb();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_587530e2947ae35681162f456c284ecb();
    });
  }
});
