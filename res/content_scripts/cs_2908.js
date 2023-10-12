
function mudfish_adclean_5582d129020975690f7a48b5dc853e0e() {
  try {
    Sizzle(`#content-container div[class^="css-"]:has(.vm-placement):not(:has(a[href] > span))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5582d129020975690f7a48b5dc853e0e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5582d129020975690f7a48b5dc853e0e, function (items) {
  if (mudfish_adclean_g_conf_5582d129020975690f7a48b5dc853e0e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5582d129020975690f7a48b5dc853e0e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
