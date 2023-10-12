
function mudfish_adclean_c08c1bdb515bcfa267cbc17589da0a9e() {
  try {
    Sizzle(`body.nate article#mArticle [disp-attr].g_comp:has(#bizDirtColl)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c08c1bdb515bcfa267cbc17589da0a9e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c08c1bdb515bcfa267cbc17589da0a9e, function (items) {
  if (mudfish_adclean_g_conf_c08c1bdb515bcfa267cbc17589da0a9e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c08c1bdb515bcfa267cbc17589da0a9e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
