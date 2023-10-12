
function mudfish_adclean_88b9d2582184fdd391e8f201f4630bff() {
  try {
    Sizzle(`div[id$="_content"][class^="content_"] > div[class^="list_top_"]:not([class*=" "])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_88b9d2582184fdd391e8f201f4630bff = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_88b9d2582184fdd391e8f201f4630bff, function (items) {
  if (mudfish_adclean_g_conf_88b9d2582184fdd391e8f201f4630bff.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_88b9d2582184fdd391e8f201f4630bff();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
