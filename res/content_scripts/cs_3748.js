
function mudfish_adclean_baa5279f9df754a3204d6e632583df62() {
  try {
    Sizzle(`div[id$="AD"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_baa5279f9df754a3204d6e632583df62 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_baa5279f9df754a3204d6e632583df62, function (items) {
  if (mudfish_adclean_g_conf_baa5279f9df754a3204d6e632583df62.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_baa5279f9df754a3204d6e632583df62();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_baa5279f9df754a3204d6e632583df62();
    });
  }
});
