
function mudfish_adclean_61393e54a4bf6b48c3f765c3fea31483() {
  try {
    Sizzle(`div[id*="_cpc_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_61393e54a4bf6b48c3f765c3fea31483 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_61393e54a4bf6b48c3f765c3fea31483, function (items) {
  if (mudfish_adclean_g_conf_61393e54a4bf6b48c3f765c3fea31483.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_61393e54a4bf6b48c3f765c3fea31483();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_61393e54a4bf6b48c3f765c3fea31483();
    });
  }
});
