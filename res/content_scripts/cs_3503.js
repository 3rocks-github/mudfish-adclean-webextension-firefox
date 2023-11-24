
function mudfish_adclean_ef8fa4f300d4280f3a5bfe5b762943de() {
  try {
    Sizzle(`.wcms_side div[style^="padding-top:"].aside div[class^="banner_"] + .h20 + .line`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ef8fa4f300d4280f3a5bfe5b762943de = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ef8fa4f300d4280f3a5bfe5b762943de, function (items) {
  if (mudfish_adclean_g_conf_ef8fa4f300d4280f3a5bfe5b762943de.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ef8fa4f300d4280f3a5bfe5b762943de();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ef8fa4f300d4280f3a5bfe5b762943de();
    });
  }
});
