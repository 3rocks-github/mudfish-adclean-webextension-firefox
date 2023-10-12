
function mudfish_adclean_a60459b803d4ac2658974b27c2960e01() {
  try {
    Sizzle(`.ezoic-ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a60459b803d4ac2658974b27c2960e01 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a60459b803d4ac2658974b27c2960e01, function (items) {
  if (mudfish_adclean_g_conf_a60459b803d4ac2658974b27c2960e01.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a60459b803d4ac2658974b27c2960e01();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
