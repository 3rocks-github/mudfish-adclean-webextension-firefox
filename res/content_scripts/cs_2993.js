
function mudfish_adclean_818d4c82409bae824c82aef8e6e1a16d() {
  try {
    Sizzle(`div[data-mesh-id="comp-lbw06ze4inlineContent-gridContainer"] div[class*="wixui-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_818d4c82409bae824c82aef8e6e1a16d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_818d4c82409bae824c82aef8e6e1a16d, function (items) {
  if (mudfish_adclean_g_conf_818d4c82409bae824c82aef8e6e1a16d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_818d4c82409bae824c82aef8e6e1a16d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
