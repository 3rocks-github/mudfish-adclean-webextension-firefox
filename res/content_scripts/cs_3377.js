
function mudfish_adclean_89ca66befdd8968132ef72a4bcb1eae3() {
  try {
    Sizzle(`#footer_container`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_89ca66befdd8968132ef72a4bcb1eae3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_89ca66befdd8968132ef72a4bcb1eae3, function (items) {
  if (mudfish_adclean_g_conf_89ca66befdd8968132ef72a4bcb1eae3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_89ca66befdd8968132ef72a4bcb1eae3();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
