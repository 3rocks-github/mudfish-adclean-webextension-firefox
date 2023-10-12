
function mudfish_adclean_54ca05d70b4789ff06c83c1e242b7bbe() {
  try {
    Sizzle(`.wrap * + div[style*=";margin"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_54ca05d70b4789ff06c83c1e242b7bbe = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_54ca05d70b4789ff06c83c1e242b7bbe, function (items) {
  if (mudfish_adclean_g_conf_54ca05d70b4789ff06c83c1e242b7bbe.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_54ca05d70b4789ff06c83c1e242b7bbe();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
