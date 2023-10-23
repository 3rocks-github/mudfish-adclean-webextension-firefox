
function mudfish_adclean_ddc69ff2b762d460294a4506b3f2fcc9() {
  try {
    Sizzle(`div[class^="fortune_module"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ddc69ff2b762d460294a4506b3f2fcc9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ddc69ff2b762d460294a4506b3f2fcc9, function (items) {
  if (mudfish_adclean_g_conf_ddc69ff2b762d460294a4506b3f2fcc9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ddc69ff2b762d460294a4506b3f2fcc9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ddc69ff2b762d460294a4506b3f2fcc9();
    });
  }
});
