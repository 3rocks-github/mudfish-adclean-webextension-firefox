
function mudfish_adclean_e55d87c1dd9ada453973471677358131() {
  try {
    Sizzle(`.download_ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e55d87c1dd9ada453973471677358131 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e55d87c1dd9ada453973471677358131, function (items) {
  if (mudfish_adclean_g_conf_e55d87c1dd9ada453973471677358131.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e55d87c1dd9ada453973471677358131();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e55d87c1dd9ada453973471677358131();
    });
  }
});
