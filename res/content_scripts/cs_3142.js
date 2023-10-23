
function mudfish_adclean_962a33712e4f52320382a19fc566850f() {
  try {
    Sizzle(`#wingBanner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_962a33712e4f52320382a19fc566850f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_962a33712e4f52320382a19fc566850f, function (items) {
  if (mudfish_adclean_g_conf_962a33712e4f52320382a19fc566850f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_962a33712e4f52320382a19fc566850f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_962a33712e4f52320382a19fc566850f();
    });
  }
});
