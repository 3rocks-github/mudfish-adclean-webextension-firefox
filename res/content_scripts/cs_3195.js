
function mudfish_adclean_8f9afecc0c25d1fc7251ca1f88e66172() {
  try {
    Sizzle(`.board-tail-banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8f9afecc0c25d1fc7251ca1f88e66172 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8f9afecc0c25d1fc7251ca1f88e66172, function (items) {
  if (mudfish_adclean_g_conf_8f9afecc0c25d1fc7251ca1f88e66172.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8f9afecc0c25d1fc7251ca1f88e66172();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8f9afecc0c25d1fc7251ca1f88e66172();
    });
  }
});
