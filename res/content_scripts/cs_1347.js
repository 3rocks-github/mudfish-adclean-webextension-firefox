
function mudfish_adclean_550184eb5e5426698f78aaff3d9ac962() {
  try {
    Sizzle(`section[class$="_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_550184eb5e5426698f78aaff3d9ac962 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_550184eb5e5426698f78aaff3d9ac962, function (items) {
  if (mudfish_adclean_g_conf_550184eb5e5426698f78aaff3d9ac962.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_550184eb5e5426698f78aaff3d9ac962();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
