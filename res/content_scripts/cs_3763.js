
function mudfish_adclean_e8f6d2fbc5a51b4b95f36a92a4579bde() {
  try {
    Sizzle(`div[class$="_ban"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e8f6d2fbc5a51b4b95f36a92a4579bde = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e8f6d2fbc5a51b4b95f36a92a4579bde, function (items) {
  if (mudfish_adclean_g_conf_e8f6d2fbc5a51b4b95f36a92a4579bde.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e8f6d2fbc5a51b4b95f36a92a4579bde();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e8f6d2fbc5a51b4b95f36a92a4579bde();
    });
  }
});
