
function mudfish_adclean_15c7a787e1fba4ff9036bcaaf6921b32() {
  try {
    Sizzle(`div[id*="-ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_15c7a787e1fba4ff9036bcaaf6921b32 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_15c7a787e1fba4ff9036bcaaf6921b32, function (items) {
  if (mudfish_adclean_g_conf_15c7a787e1fba4ff9036bcaaf6921b32.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_15c7a787e1fba4ff9036bcaaf6921b32();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_15c7a787e1fba4ff9036bcaaf6921b32();
    });
  }
});
