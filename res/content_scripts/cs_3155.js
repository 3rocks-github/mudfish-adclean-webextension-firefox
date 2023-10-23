
function mudfish_adclean_cae392dee221245a0819c88ef72fd423() {
  try {
    Sizzle(`.popup`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cae392dee221245a0819c88ef72fd423 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cae392dee221245a0819c88ef72fd423, function (items) {
  if (mudfish_adclean_g_conf_cae392dee221245a0819c88ef72fd423.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cae392dee221245a0819c88ef72fd423();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cae392dee221245a0819c88ef72fd423();
    });
  }
});
