
function mudfish_adclean_5dc61311eec4d0365d0eedfea9d37d38() {
  try {
    Sizzle(`div[id$="ad"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5dc61311eec4d0365d0eedfea9d37d38 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5dc61311eec4d0365d0eedfea9d37d38, function (items) {
  if (mudfish_adclean_g_conf_5dc61311eec4d0365d0eedfea9d37d38.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5dc61311eec4d0365d0eedfea9d37d38();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5dc61311eec4d0365d0eedfea9d37d38();
    });
  }
});
