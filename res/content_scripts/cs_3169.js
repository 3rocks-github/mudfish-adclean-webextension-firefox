
function mudfish_adclean_4ff3d5393337f7a51c3372136f098ed2() {
  try {
    Sizzle(`div[id*="ads"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4ff3d5393337f7a51c3372136f098ed2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4ff3d5393337f7a51c3372136f098ed2, function (items) {
  if (mudfish_adclean_g_conf_4ff3d5393337f7a51c3372136f098ed2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4ff3d5393337f7a51c3372136f098ed2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4ff3d5393337f7a51c3372136f098ed2();
    });
  }
});
