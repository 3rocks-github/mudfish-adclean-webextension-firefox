
function mudfish_adclean_ce3f3183b8c82e694628b76732c9b0cc() {
  try {
    Sizzle(`.basic-banner-gallery`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ce3f3183b8c82e694628b76732c9b0cc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ce3f3183b8c82e694628b76732c9b0cc, function (items) {
  if (mudfish_adclean_g_conf_ce3f3183b8c82e694628b76732c9b0cc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ce3f3183b8c82e694628b76732c9b0cc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ce3f3183b8c82e694628b76732c9b0cc();
    });
  }
});
