
function mudfish_adclean_35334bdb12f75664d0605aa8234312f5() {
  try {
    Sizzle(`div[id^="bidrich_"][style*=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_35334bdb12f75664d0605aa8234312f5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_35334bdb12f75664d0605aa8234312f5, function (items) {
  if (mudfish_adclean_g_conf_35334bdb12f75664d0605aa8234312f5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_35334bdb12f75664d0605aa8234312f5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_35334bdb12f75664d0605aa8234312f5();
    });
  }
});
