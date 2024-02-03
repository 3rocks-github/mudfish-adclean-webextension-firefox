
function mudfish_adclean_7406edd715f38a38f68afa9a4a0d3030() {
  try {
    Sizzle(`div[class^="banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7406edd715f38a38f68afa9a4a0d3030 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7406edd715f38a38f68afa9a4a0d3030, function (items) {
  if (mudfish_adclean_g_conf_7406edd715f38a38f68afa9a4a0d3030.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7406edd715f38a38f68afa9a4a0d3030();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7406edd715f38a38f68afa9a4a0d3030();
    });
  }
});
