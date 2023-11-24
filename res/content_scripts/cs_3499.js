
function mudfish_adclean_065ddf0817854d13ec8793dd33867727() {
  try {
    Sizzle(`.footer_promotion`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_065ddf0817854d13ec8793dd33867727 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_065ddf0817854d13ec8793dd33867727, function (items) {
  if (mudfish_adclean_g_conf_065ddf0817854d13ec8793dd33867727.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_065ddf0817854d13ec8793dd33867727();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_065ddf0817854d13ec8793dd33867727();
    });
  }
});
