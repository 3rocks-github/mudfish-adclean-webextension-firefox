
function mudfish_adclean_a07fc0736e11d5916becd62d747da5ca() {
  try {
    Sizzle(`div[class^="banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a07fc0736e11d5916becd62d747da5ca = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a07fc0736e11d5916becd62d747da5ca, function (items) {
  if (mudfish_adclean_g_conf_a07fc0736e11d5916becd62d747da5ca.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a07fc0736e11d5916becd62d747da5ca();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
