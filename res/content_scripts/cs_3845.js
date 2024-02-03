
function mudfish_adclean_a77961e346166161c86c530a90b9f200() {
  try {
    Sizzle(`.item-list > .on:has(.ad-wrap-text)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a77961e346166161c86c530a90b9f200 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a77961e346166161c86c530a90b9f200, function (items) {
  if (mudfish_adclean_g_conf_a77961e346166161c86c530a90b9f200.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a77961e346166161c86c530a90b9f200();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a77961e346166161c86c530a90b9f200();
    });
  }
});
