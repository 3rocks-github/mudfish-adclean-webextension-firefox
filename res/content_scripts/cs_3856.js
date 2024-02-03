
function mudfish_adclean_655e64571c2777c8265581715eb88fdc() {
  try {
    Sizzle(`ul[class] > li:has(> a[href^="/guarantee.php"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_655e64571c2777c8265581715eb88fdc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_655e64571c2777c8265581715eb88fdc, function (items) {
  if (mudfish_adclean_g_conf_655e64571c2777c8265581715eb88fdc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_655e64571c2777c8265581715eb88fdc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_655e64571c2777c8265581715eb88fdc();
    });
  }
});
