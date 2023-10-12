
function mudfish_adclean_a82390fc2c0a76f827dd973d12b6464c() {
  try {
    Sizzle(`.adsbygoogle`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a82390fc2c0a76f827dd973d12b6464c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a82390fc2c0a76f827dd973d12b6464c, function (items) {
  if (mudfish_adclean_g_conf_a82390fc2c0a76f827dd973d12b6464c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a82390fc2c0a76f827dd973d12b6464c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
