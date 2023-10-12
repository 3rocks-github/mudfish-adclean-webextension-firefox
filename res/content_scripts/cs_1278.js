
function mudfish_adclean_6a1c401f85aad5dcfacd38e0be71d3f9() {
  try {
    Sizzle(`.nav_container > div[class^="list_bottom_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6a1c401f85aad5dcfacd38e0be71d3f9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6a1c401f85aad5dcfacd38e0be71d3f9, function (items) {
  if (mudfish_adclean_g_conf_6a1c401f85aad5dcfacd38e0be71d3f9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6a1c401f85aad5dcfacd38e0be71d3f9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
