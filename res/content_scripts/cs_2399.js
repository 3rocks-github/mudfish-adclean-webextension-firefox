
function mudfish_adclean_862143af169962ec90468f558312b749() {
  try {
    Sizzle(`#sidebar > .module:has(> div[id^="ad"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_862143af169962ec90468f558312b749 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_862143af169962ec90468f558312b749, function (items) {
  if (mudfish_adclean_g_conf_862143af169962ec90468f558312b749.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_862143af169962ec90468f558312b749();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_862143af169962ec90468f558312b749();
    });
  }
});
