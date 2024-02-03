
function mudfish_adclean_70cd28bb7cb53f6656b21e5d3a35b883() {
  try {
    Sizzle(`section[class^="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_70cd28bb7cb53f6656b21e5d3a35b883 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_70cd28bb7cb53f6656b21e5d3a35b883, function (items) {
  if (mudfish_adclean_g_conf_70cd28bb7cb53f6656b21e5d3a35b883.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_70cd28bb7cb53f6656b21e5d3a35b883();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_70cd28bb7cb53f6656b21e5d3a35b883();
    });
  }
});
