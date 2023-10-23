
function mudfish_adclean_fefc2a49fd50ee1dffb8b3272d68d4d5() {
  try {
    Sizzle(`div[id*="-banner-"] > div[class*=" "] > div[class*=" "][style*=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fefc2a49fd50ee1dffb8b3272d68d4d5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fefc2a49fd50ee1dffb8b3272d68d4d5, function (items) {
  if (mudfish_adclean_g_conf_fefc2a49fd50ee1dffb8b3272d68d4d5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fefc2a49fd50ee1dffb8b3272d68d4d5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fefc2a49fd50ee1dffb8b3272d68d4d5();
    });
  }
});
