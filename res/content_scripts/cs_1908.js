
function mudfish_adclean_b05a4843b24a97f126af59b66b4ec508() {
  try {
    Sizzle(`.aside_g.aside_ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b05a4843b24a97f126af59b66b4ec508 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b05a4843b24a97f126af59b66b4ec508, function (items) {
  if (mudfish_adclean_g_conf_b05a4843b24a97f126af59b66b4ec508.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b05a4843b24a97f126af59b66b4ec508();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
