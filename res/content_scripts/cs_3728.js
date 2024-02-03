
function mudfish_adclean_e7551bf80c4937b79a4e9646f668bcae() {
  try {
    Sizzle(`div[style*=";height:"][data-ad]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e7551bf80c4937b79a4e9646f668bcae = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e7551bf80c4937b79a4e9646f668bcae, function (items) {
  if (mudfish_adclean_g_conf_e7551bf80c4937b79a4e9646f668bcae.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e7551bf80c4937b79a4e9646f668bcae();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e7551bf80c4937b79a4e9646f668bcae();
    });
  }
});
