
function mudfish_adclean_5705c7f5e7003da92cb3f15f23d7557d() {
  try {
    Sizzle(`main ~ aside article[style*="height:"][style*="margin:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5705c7f5e7003da92cb3f15f23d7557d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5705c7f5e7003da92cb3f15f23d7557d, function (items) {
  if (mudfish_adclean_g_conf_5705c7f5e7003da92cb3f15f23d7557d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5705c7f5e7003da92cb3f15f23d7557d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
