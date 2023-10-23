
function mudfish_adclean_2dfb7b673f8b003f0587ada87d4edee7() {
  try {
    Sizzle(`.thisTimeNews > ul`).forEach(element => {
      element.style.borderRight = "none !important";
element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2dfb7b673f8b003f0587ada87d4edee7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2dfb7b673f8b003f0587ada87d4edee7, function (items) {
  if (mudfish_adclean_g_conf_2dfb7b673f8b003f0587ada87d4edee7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2dfb7b673f8b003f0587ada87d4edee7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2dfb7b673f8b003f0587ada87d4edee7();
    });
  }
});
