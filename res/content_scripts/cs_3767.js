
function mudfish_adclean_b51b7e796e0dc45655ca4c0725095dfb() {
  try {
    Sizzle(`.basic-banner-gallery`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b51b7e796e0dc45655ca4c0725095dfb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b51b7e796e0dc45655ca4c0725095dfb, function (items) {
  if (mudfish_adclean_g_conf_b51b7e796e0dc45655ca4c0725095dfb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b51b7e796e0dc45655ca4c0725095dfb();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b51b7e796e0dc45655ca4c0725095dfb();
    });
  }
});
