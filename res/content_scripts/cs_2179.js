
function mudfish_adclean_0e217a1e7245e886a50bead10914385b() {
  try {
    Sizzle(`iframe[width="100%"][height="120"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0e217a1e7245e886a50bead10914385b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0e217a1e7245e886a50bead10914385b, function (items) {
  if (mudfish_adclean_g_conf_0e217a1e7245e886a50bead10914385b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0e217a1e7245e886a50bead10914385b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0e217a1e7245e886a50bead10914385b();
    });
  }
});
