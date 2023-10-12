
function mudfish_adclean_e1ffaffb93870923a840ef2cdcfdc6b8() {
  try {
    Sizzle(`a[href*="?bo_table=partner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e1ffaffb93870923a840ef2cdcfdc6b8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e1ffaffb93870923a840ef2cdcfdc6b8, function (items) {
  if (mudfish_adclean_g_conf_e1ffaffb93870923a840ef2cdcfdc6b8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e1ffaffb93870923a840ef2cdcfdc6b8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
