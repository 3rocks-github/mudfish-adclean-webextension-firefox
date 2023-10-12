
function mudfish_adclean_12c85c5535ab16b78659ce51382d0a0d() {
  try {
    Sizzle(`[class^="document_"].xe_content`).forEach(element => {
      element.style.display = "block !important";
element.style.height = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_12c85c5535ab16b78659ce51382d0a0d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_12c85c5535ab16b78659ce51382d0a0d, function (items) {
  if (mudfish_adclean_g_conf_12c85c5535ab16b78659ce51382d0a0d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_12c85c5535ab16b78659ce51382d0a0d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
