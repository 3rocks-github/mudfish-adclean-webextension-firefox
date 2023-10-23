
function mudfish_adclean_61308696273a0e724090f4bee93833da() {
  try {
    Sizzle(`iframe[src*="/banner/google_ad.html"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_61308696273a0e724090f4bee93833da = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_61308696273a0e724090f4bee93833da, function (items) {
  if (mudfish_adclean_g_conf_61308696273a0e724090f4bee93833da.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_61308696273a0e724090f4bee93833da();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_61308696273a0e724090f4bee93833da();
    });
  }
});
