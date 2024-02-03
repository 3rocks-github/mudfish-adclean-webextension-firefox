
function mudfish_adclean_85a712d759a14d2d968149a95a71790d() {
  try {
    Sizzle(`ul[class] > li:has(> a[href^="/guarantee.php"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_85a712d759a14d2d968149a95a71790d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_85a712d759a14d2d968149a95a71790d, function (items) {
  if (mudfish_adclean_g_conf_85a712d759a14d2d968149a95a71790d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_85a712d759a14d2d968149a95a71790d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_85a712d759a14d2d968149a95a71790d();
    });
  }
});
