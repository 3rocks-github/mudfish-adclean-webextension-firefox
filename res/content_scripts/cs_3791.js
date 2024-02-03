
function mudfish_adclean_f84ee5bfadf0adbc29a9c22fe10b1766() {
  try {
    Sizzle(`div[id*="-banner-"] > div[class*=" "] > div[class*=" "][style*=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f84ee5bfadf0adbc29a9c22fe10b1766 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f84ee5bfadf0adbc29a9c22fe10b1766, function (items) {
  if (mudfish_adclean_g_conf_f84ee5bfadf0adbc29a9c22fe10b1766.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f84ee5bfadf0adbc29a9c22fe10b1766();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f84ee5bfadf0adbc29a9c22fe10b1766();
    });
  }
});
