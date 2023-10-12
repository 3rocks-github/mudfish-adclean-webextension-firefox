
function mudfish_adclean_be5f7ae6e6c864eff5ba4bfc6a43c8f4() {
  try {
    Sizzle(`table[style]:not([style=" "]) a[href][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_be5f7ae6e6c864eff5ba4bfc6a43c8f4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_be5f7ae6e6c864eff5ba4bfc6a43c8f4, function (items) {
  if (mudfish_adclean_g_conf_be5f7ae6e6c864eff5ba4bfc6a43c8f4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_be5f7ae6e6c864eff5ba4bfc6a43c8f4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
