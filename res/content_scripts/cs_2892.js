
function mudfish_adclean_12f113b72059d551e3e1aa75c1d1d26d() {
  try {
    Sizzle(`#MiMintBottomViewLayer`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_12f113b72059d551e3e1aa75c1d1d26d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_12f113b72059d551e3e1aa75c1d1d26d, function (items) {
  if (mudfish_adclean_g_conf_12f113b72059d551e3e1aa75c1d1d26d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_12f113b72059d551e3e1aa75c1d1d26d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_12f113b72059d551e3e1aa75c1d1d26d();
    });
  }
});
