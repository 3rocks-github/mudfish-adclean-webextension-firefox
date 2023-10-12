
function mudfish_adclean_39f19f0229acb76b7f8079a6df8e3e1a() {
  try {
    Sizzle(`main div[class*="space-"].hidden.flex-none`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_39f19f0229acb76b7f8079a6df8e3e1a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_39f19f0229acb76b7f8079a6df8e3e1a, function (items) {
  if (mudfish_adclean_g_conf_39f19f0229acb76b7f8079a6df8e3e1a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_39f19f0229acb76b7f8079a6df8e3e1a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
