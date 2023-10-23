
function mudfish_adclean_7357fecba0b605c6c68be1c54cfec1a6() {
  try {
    Sizzle(`.ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7357fecba0b605c6c68be1c54cfec1a6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7357fecba0b605c6c68be1c54cfec1a6, function (items) {
  if (mudfish_adclean_g_conf_7357fecba0b605c6c68be1c54cfec1a6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7357fecba0b605c6c68be1c54cfec1a6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7357fecba0b605c6c68be1c54cfec1a6();
    });
  }
});
