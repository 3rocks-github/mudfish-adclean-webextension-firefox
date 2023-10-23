
function mudfish_adclean_40f384ebe5e690093c5fc4762bd16640() {
  try {
    Sizzle(`#top-banner-ad`).forEach(element => {
      element.style.height = "1px !important";
element.style.position = "absolute !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_40f384ebe5e690093c5fc4762bd16640 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_40f384ebe5e690093c5fc4762bd16640, function (items) {
  if (mudfish_adclean_g_conf_40f384ebe5e690093c5fc4762bd16640.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_40f384ebe5e690093c5fc4762bd16640();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_40f384ebe5e690093c5fc4762bd16640();
    });
  }
});
