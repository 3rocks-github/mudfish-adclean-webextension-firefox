
function mudfish_adclean_429c7bb40af758ff823702925c80e638() {
  try {
    Sizzle(`.adsbygoogle`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_429c7bb40af758ff823702925c80e638 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_429c7bb40af758ff823702925c80e638, function (items) {
  if (mudfish_adclean_g_conf_429c7bb40af758ff823702925c80e638.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_429c7bb40af758ff823702925c80e638();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_429c7bb40af758ff823702925c80e638();
    });
  }
});
