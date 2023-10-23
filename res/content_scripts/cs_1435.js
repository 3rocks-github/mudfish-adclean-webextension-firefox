
function mudfish_adclean_97a48d1ef5545e178f3ccc0e0ad75cfc() {
  try {
    Sizzle(`.box__component-sponsor-link`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_97a48d1ef5545e178f3ccc0e0ad75cfc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_97a48d1ef5545e178f3ccc0e0ad75cfc, function (items) {
  if (mudfish_adclean_g_conf_97a48d1ef5545e178f3ccc0e0ad75cfc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_97a48d1ef5545e178f3ccc0e0ad75cfc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_97a48d1ef5545e178f3ccc0e0ad75cfc();
    });
  }
});
