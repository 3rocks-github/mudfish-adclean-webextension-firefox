
function mudfish_adclean_9f9965af116ed37f9666a8ebbeaf7b69() {
  try {
    Sizzle(`.at-banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9f9965af116ed37f9666a8ebbeaf7b69 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9f9965af116ed37f9666a8ebbeaf7b69, function (items) {
  if (mudfish_adclean_g_conf_9f9965af116ed37f9666a8ebbeaf7b69.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9f9965af116ed37f9666a8ebbeaf7b69();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9f9965af116ed37f9666a8ebbeaf7b69();
    });
  }
});
