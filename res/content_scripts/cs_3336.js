
function mudfish_adclean_99696bc8b222c8a76e768cabf163d2bc() {
  try {
    Sizzle(`#popup-root`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_99696bc8b222c8a76e768cabf163d2bc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_99696bc8b222c8a76e768cabf163d2bc, function (items) {
  if (mudfish_adclean_g_conf_99696bc8b222c8a76e768cabf163d2bc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_99696bc8b222c8a76e768cabf163d2bc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_99696bc8b222c8a76e768cabf163d2bc();
    });
  }
});
