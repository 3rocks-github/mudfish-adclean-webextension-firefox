
function mudfish_adclean_bf9db985f1ee9f96730927d5d7a5c7b8() {
  try {
    Sizzle(`.aside_bundle > div[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bf9db985f1ee9f96730927d5d7a5c7b8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bf9db985f1ee9f96730927d5d7a5c7b8, function (items) {
  if (mudfish_adclean_g_conf_bf9db985f1ee9f96730927d5d7a5c7b8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bf9db985f1ee9f96730927d5d7a5c7b8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
