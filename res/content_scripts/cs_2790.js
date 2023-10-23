
function mudfish_adclean_1a5f0e56f8765667e07dd2462b544000() {
  try {
    Sizzle(`a[class^="banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1a5f0e56f8765667e07dd2462b544000 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1a5f0e56f8765667e07dd2462b544000, function (items) {
  if (mudfish_adclean_g_conf_1a5f0e56f8765667e07dd2462b544000.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1a5f0e56f8765667e07dd2462b544000();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1a5f0e56f8765667e07dd2462b544000();
    });
  }
});
