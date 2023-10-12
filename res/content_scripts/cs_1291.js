
function mudfish_adclean_b97937fed433e86b4737bd4c5f214f0e() {
  try {
    Sizzle(`.media_s_right > div[style^="height:"].clear`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b97937fed433e86b4737bd4c5f214f0e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b97937fed433e86b4737bd4c5f214f0e, function (items) {
  if (mudfish_adclean_g_conf_b97937fed433e86b4737bd4c5f214f0e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b97937fed433e86b4737bd4c5f214f0e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
