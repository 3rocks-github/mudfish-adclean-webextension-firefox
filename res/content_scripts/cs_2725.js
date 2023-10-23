
function mudfish_adclean_1f1a0462fede243b5e967eee9532c3f4() {
  try {
    Sizzle(`#content .ad_parent`).forEach(element => {
      element.style.height = "100% !important";
element.style.overflow = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1f1a0462fede243b5e967eee9532c3f4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1f1a0462fede243b5e967eee9532c3f4, function (items) {
  if (mudfish_adclean_g_conf_1f1a0462fede243b5e967eee9532c3f4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1f1a0462fede243b5e967eee9532c3f4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1f1a0462fede243b5e967eee9532c3f4();
    });
  }
});
