
function mudfish_adclean_402d4d3be8a2a91ad60d225851bb28ff() {
  try {
    Sizzle(`div[class^="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_402d4d3be8a2a91ad60d225851bb28ff = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_402d4d3be8a2a91ad60d225851bb28ff, function (items) {
  if (mudfish_adclean_g_conf_402d4d3be8a2a91ad60d225851bb28ff.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_402d4d3be8a2a91ad60d225851bb28ff();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_402d4d3be8a2a91ad60d225851bb28ff();
    });
  }
});
