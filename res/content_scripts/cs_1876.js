
function mudfish_adclean_f7b0c0efd508feec8cdc6e58683ce334() {
  try {
    Sizzle(`div[class^="newsview_ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f7b0c0efd508feec8cdc6e58683ce334 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f7b0c0efd508feec8cdc6e58683ce334, function (items) {
  if (mudfish_adclean_g_conf_f7b0c0efd508feec8cdc6e58683ce334.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f7b0c0efd508feec8cdc6e58683ce334();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
