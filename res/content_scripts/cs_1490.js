
function mudfish_adclean_21004be82f406407ff00ca2c607f4e06() {
  try {
    Sizzle(`div[class^="AD"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_21004be82f406407ff00ca2c607f4e06 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_21004be82f406407ff00ca2c607f4e06, function (items) {
  if (mudfish_adclean_g_conf_21004be82f406407ff00ca2c607f4e06.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_21004be82f406407ff00ca2c607f4e06();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_21004be82f406407ff00ca2c607f4e06();
    });
  }
});
