
function mudfish_adclean_da0b54f05c4ba6950c1b79607e4cba8b() {
  try {
    Sizzle(`.alert.alert-danger:has(> a:contains([AD]))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_da0b54f05c4ba6950c1b79607e4cba8b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_da0b54f05c4ba6950c1b79607e4cba8b, function (items) {
  if (mudfish_adclean_g_conf_da0b54f05c4ba6950c1b79607e4cba8b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_da0b54f05c4ba6950c1b79607e4cba8b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_da0b54f05c4ba6950c1b79607e4cba8b();
    });
  }
});
