
function mudfish_adclean_04ec40ff37d8d14d177af9cddd3c18a0() {
  try {
    Sizzle(`ul[class] > li:has(> a[href^="/guarantee.php"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_04ec40ff37d8d14d177af9cddd3c18a0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_04ec40ff37d8d14d177af9cddd3c18a0, function (items) {
  if (mudfish_adclean_g_conf_04ec40ff37d8d14d177af9cddd3c18a0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_04ec40ff37d8d14d177af9cddd3c18a0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_04ec40ff37d8d14d177af9cddd3c18a0();
    });
  }
});
