
function mudfish_adclean_f9725adfde2f3a2705019aeef304d928() {
  try {
    Sizzle(`#splinkColl`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f9725adfde2f3a2705019aeef304d928 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f9725adfde2f3a2705019aeef304d928, function (items) {
  if (mudfish_adclean_g_conf_f9725adfde2f3a2705019aeef304d928.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f9725adfde2f3a2705019aeef304d928();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f9725adfde2f3a2705019aeef304d928();
    });
  }
});
