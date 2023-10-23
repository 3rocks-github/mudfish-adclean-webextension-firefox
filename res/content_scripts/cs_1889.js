
function mudfish_adclean_86e81c0f211881322a2000515017d019() {
  try {
    Sizzle(`div[class^="floating_ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_86e81c0f211881322a2000515017d019 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_86e81c0f211881322a2000515017d019, function (items) {
  if (mudfish_adclean_g_conf_86e81c0f211881322a2000515017d019.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_86e81c0f211881322a2000515017d019();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_86e81c0f211881322a2000515017d019();
    });
  }
});
