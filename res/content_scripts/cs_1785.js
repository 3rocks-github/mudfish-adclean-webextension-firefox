
function mudfish_adclean_970b9751b9b08bfece883b331f43b011() {
  try {
    Sizzle(`.adsense`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_970b9751b9b08bfece883b331f43b011 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_970b9751b9b08bfece883b331f43b011, function (items) {
  if (mudfish_adclean_g_conf_970b9751b9b08bfece883b331f43b011.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_970b9751b9b08bfece883b331f43b011();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_970b9751b9b08bfece883b331f43b011();
    });
  }
});
