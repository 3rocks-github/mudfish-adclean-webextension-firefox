
function mudfish_adclean_f37ea54ef3fbd28addb1e2506eaa5ed4() {
  try {
    Sizzle(`._listA tr.notice:has(span[style]:contains(AD))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f37ea54ef3fbd28addb1e2506eaa5ed4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f37ea54ef3fbd28addb1e2506eaa5ed4, function (items) {
  if (mudfish_adclean_g_conf_f37ea54ef3fbd28addb1e2506eaa5ed4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f37ea54ef3fbd28addb1e2506eaa5ed4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
