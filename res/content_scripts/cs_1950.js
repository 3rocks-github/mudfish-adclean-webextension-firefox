
function mudfish_adclean_5e7b903fbc317942e944792659e61a40() {
  try {
    Sizzle(`div[class^="gg_"], div[class$="_gg"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5e7b903fbc317942e944792659e61a40 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5e7b903fbc317942e944792659e61a40, function (items) {
  if (mudfish_adclean_g_conf_5e7b903fbc317942e944792659e61a40.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5e7b903fbc317942e944792659e61a40();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5e7b903fbc317942e944792659e61a40();
    });
  }
});
