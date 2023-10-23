
function mudfish_adclean_c88e1c13a8da9b92c0773a0e554a4035() {
  try {
    Sizzle(`div[class^="codad_ban"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c88e1c13a8da9b92c0773a0e554a4035 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c88e1c13a8da9b92c0773a0e554a4035, function (items) {
  if (mudfish_adclean_g_conf_c88e1c13a8da9b92c0773a0e554a4035.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c88e1c13a8da9b92c0773a0e554a4035();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c88e1c13a8da9b92c0773a0e554a4035();
    });
  }
});
