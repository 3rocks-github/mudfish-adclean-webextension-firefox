
function mudfish_adclean_4b6ddba9136d67856c0d69f385e2fc8c() {
  try {
    Sizzle(`section[class*="ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4b6ddba9136d67856c0d69f385e2fc8c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4b6ddba9136d67856c0d69f385e2fc8c, function (items) {
  if (mudfish_adclean_g_conf_4b6ddba9136d67856c0d69f385e2fc8c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4b6ddba9136d67856c0d69f385e2fc8c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
