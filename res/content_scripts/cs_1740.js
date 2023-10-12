
function mudfish_adclean_3f34acff8f76cb27f472978595a69cb2() {
  try {
    Sizzle(`.wt_viewer .preview_store`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3f34acff8f76cb27f472978595a69cb2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3f34acff8f76cb27f472978595a69cb2, function (items) {
  if (mudfish_adclean_g_conf_3f34acff8f76cb27f472978595a69cb2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3f34acff8f76cb27f472978595a69cb2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
