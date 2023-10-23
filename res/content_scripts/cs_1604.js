
function mudfish_adclean_4dc49f0da505862902b72dc4aa1de13c() {
  try {
    Sizzle(`.widget-side-box > div[class^="main-box main-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4dc49f0da505862902b72dc4aa1de13c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4dc49f0da505862902b72dc4aa1de13c, function (items) {
  if (mudfish_adclean_g_conf_4dc49f0da505862902b72dc4aa1de13c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4dc49f0da505862902b72dc4aa1de13c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4dc49f0da505862902b72dc4aa1de13c();
    });
  }
});
