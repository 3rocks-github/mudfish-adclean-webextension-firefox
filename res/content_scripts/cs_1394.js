
function mudfish_adclean_6671b1f422c680332a59b62237eb38bc() {
  try {
    Sizzle(`div[class^="nbp_container"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6671b1f422c680332a59b62237eb38bc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6671b1f422c680332a59b62237eb38bc, function (items) {
  if (mudfish_adclean_g_conf_6671b1f422c680332a59b62237eb38bc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6671b1f422c680332a59b62237eb38bc();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
