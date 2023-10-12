
function mudfish_adclean_704b4e75eb58864ef1be5c7f22e0fc2b() {
  try {
    Sizzle(`div[class^="section-"][class$="-ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_704b4e75eb58864ef1be5c7f22e0fc2b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_704b4e75eb58864ef1be5c7f22e0fc2b, function (items) {
  if (mudfish_adclean_g_conf_704b4e75eb58864ef1be5c7f22e0fc2b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_704b4e75eb58864ef1be5c7f22e0fc2b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
