
function mudfish_adclean_d6ee1d38471acede30d6fc3f8eedf26f() {
  try {
    Sizzle(`div[id^="adsense_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d6ee1d38471acede30d6fc3f8eedf26f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d6ee1d38471acede30d6fc3f8eedf26f, function (items) {
  if (mudfish_adclean_g_conf_d6ee1d38471acede30d6fc3f8eedf26f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d6ee1d38471acede30d6fc3f8eedf26f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d6ee1d38471acede30d6fc3f8eedf26f();
    });
  }
});
