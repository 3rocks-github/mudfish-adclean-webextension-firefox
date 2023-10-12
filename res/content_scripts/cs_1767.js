
function mudfish_adclean_8bf9c73d8b146bbf56a1cc634dc07786() {
  try {
    Sizzle(`#newsSidebar > div[id$="Banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8bf9c73d8b146bbf56a1cc634dc07786 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8bf9c73d8b146bbf56a1cc634dc07786, function (items) {
  if (mudfish_adclean_g_conf_8bf9c73d8b146bbf56a1cc634dc07786.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8bf9c73d8b146bbf56a1cc634dc07786();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
