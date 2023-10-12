
function mudfish_adclean_6e600aff897b226d760cbc9379a03d93() {
  try {
    Sizzle(`.fm_vote ~ div[style*="max-width:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6e600aff897b226d760cbc9379a03d93 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6e600aff897b226d760cbc9379a03d93, function (items) {
  if (mudfish_adclean_g_conf_6e600aff897b226d760cbc9379a03d93.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6e600aff897b226d760cbc9379a03d93();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
