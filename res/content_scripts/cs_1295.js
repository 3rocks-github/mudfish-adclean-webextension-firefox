
function mudfish_adclean_c4e85be1b172552c9f66dc79357a98a6() {
  try {
    Sizzle(`iframe[id$="_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c4e85be1b172552c9f66dc79357a98a6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c4e85be1b172552c9f66dc79357a98a6, function (items) {
  if (mudfish_adclean_g_conf_c4e85be1b172552c9f66dc79357a98a6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c4e85be1b172552c9f66dc79357a98a6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c4e85be1b172552c9f66dc79357a98a6();
    });
  }
});
