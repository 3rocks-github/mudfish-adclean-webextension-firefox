
function mudfish_adclean_45676cd05b57302a7997c150c7e0338d() {
  try {
    Sizzle(`.content.ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_45676cd05b57302a7997c150c7e0338d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_45676cd05b57302a7997c150c7e0338d, function (items) {
  if (mudfish_adclean_g_conf_45676cd05b57302a7997c150c7e0338d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_45676cd05b57302a7997c150c7e0338d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_45676cd05b57302a7997c150c7e0338d();
    });
  }
});
