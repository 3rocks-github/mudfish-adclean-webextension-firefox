
function mudfish_adclean_2c25e72219f76539cdac3da73461acd5() {
  try {
    Sizzle(`div[role="main"]#content div[data-pswp-uid].rhymix_content:not([class^="document_"]):not([class^="comment_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2c25e72219f76539cdac3da73461acd5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2c25e72219f76539cdac3da73461acd5, function (items) {
  if (mudfish_adclean_g_conf_2c25e72219f76539cdac3da73461acd5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2c25e72219f76539cdac3da73461acd5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
