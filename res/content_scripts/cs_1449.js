
function mudfish_adclean_587aae7c3020d1a635c1e6e07b3d2d04() {
  try {
    Sizzle(`div[id*="_"][class*="-"][class^="bidrich-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_587aae7c3020d1a635c1e6e07b3d2d04 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_587aae7c3020d1a635c1e6e07b3d2d04, function (items) {
  if (mudfish_adclean_g_conf_587aae7c3020d1a635c1e6e07b3d2d04.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_587aae7c3020d1a635c1e6e07b3d2d04();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_587aae7c3020d1a635c1e6e07b3d2d04();
    });
  }
});
