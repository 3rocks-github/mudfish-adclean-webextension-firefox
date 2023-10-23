
function mudfish_adclean_8bde82e371ce818757a1d13b64b54bea() {
  try {
    Sizzle(`div[id^="mobileTailAd"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8bde82e371ce818757a1d13b64b54bea = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8bde82e371ce818757a1d13b64b54bea, function (items) {
  if (mudfish_adclean_g_conf_8bde82e371ce818757a1d13b64b54bea.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8bde82e371ce818757a1d13b64b54bea();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8bde82e371ce818757a1d13b64b54bea();
    });
  }
});
