
function mudfish_adclean_ac9f7ccb97d551afd968ce128c367bca() {
  try {
    Sizzle(`#content > div[style*="width:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ac9f7ccb97d551afd968ce128c367bca = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ac9f7ccb97d551afd968ce128c367bca, function (items) {
  if (mudfish_adclean_g_conf_ac9f7ccb97d551afd968ce128c367bca.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ac9f7ccb97d551afd968ce128c367bca();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
