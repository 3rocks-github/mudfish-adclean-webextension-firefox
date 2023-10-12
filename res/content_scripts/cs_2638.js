
function mudfish_adclean_3950b4ef0e9c035b1063a74c1a0239ae() {
  try {
    Sizzle(`ins.adsbygoogle`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3950b4ef0e9c035b1063a74c1a0239ae = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3950b4ef0e9c035b1063a74c1a0239ae, function (items) {
  if (mudfish_adclean_g_conf_3950b4ef0e9c035b1063a74c1a0239ae.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3950b4ef0e9c035b1063a74c1a0239ae();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
