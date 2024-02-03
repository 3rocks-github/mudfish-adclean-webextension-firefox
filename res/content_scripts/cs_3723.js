
function mudfish_adclean_ea90d0844964ff9c52cf3d8f97132194() {
  try {
    Sizzle(`.bn`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ea90d0844964ff9c52cf3d8f97132194 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ea90d0844964ff9c52cf3d8f97132194, function (items) {
  if (mudfish_adclean_g_conf_ea90d0844964ff9c52cf3d8f97132194.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ea90d0844964ff9c52cf3d8f97132194();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ea90d0844964ff9c52cf3d8f97132194();
    });
  }
});
