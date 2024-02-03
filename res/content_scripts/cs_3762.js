
function mudfish_adclean_993ddca7375192b4833bb406229e5001() {
  try {
    Sizzle(`div[class^="popup_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_993ddca7375192b4833bb406229e5001 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_993ddca7375192b4833bb406229e5001, function (items) {
  if (mudfish_adclean_g_conf_993ddca7375192b4833bb406229e5001.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_993ddca7375192b4833bb406229e5001();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_993ddca7375192b4833bb406229e5001();
    });
  }
});
