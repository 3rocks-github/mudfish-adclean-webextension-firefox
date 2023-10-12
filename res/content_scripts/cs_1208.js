
function mudfish_adclean_ee86d6f88e5958dd54709af5c6aa060e() {
  try {
    Sizzle(`.W_wrap > div[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ee86d6f88e5958dd54709af5c6aa060e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ee86d6f88e5958dd54709af5c6aa060e, function (items) {
  if (mudfish_adclean_g_conf_ee86d6f88e5958dd54709af5c6aa060e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ee86d6f88e5958dd54709af5c6aa060e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
