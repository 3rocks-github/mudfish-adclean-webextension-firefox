
function mudfish_adclean_56ba963edad0f66cba5a432fe53845f7() {
  try {
    Sizzle(`div[class$="Bann"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_56ba963edad0f66cba5a432fe53845f7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_56ba963edad0f66cba5a432fe53845f7, function (items) {
  if (mudfish_adclean_g_conf_56ba963edad0f66cba5a432fe53845f7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_56ba963edad0f66cba5a432fe53845f7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_56ba963edad0f66cba5a432fe53845f7();
    });
  }
});
