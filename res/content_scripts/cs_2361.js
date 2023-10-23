
function mudfish_adclean_6bfc758eaa2b1c7b673bdfbbdf4b5e07() {
  try {
    Sizzle(`.banner-open .contents`).forEach(element => {
      element.style.paddingTop = "68px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6bfc758eaa2b1c7b673bdfbbdf4b5e07 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6bfc758eaa2b1c7b673bdfbbdf4b5e07, function (items) {
  if (mudfish_adclean_g_conf_6bfc758eaa2b1c7b673bdfbbdf4b5e07.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6bfc758eaa2b1c7b673bdfbbdf4b5e07();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6bfc758eaa2b1c7b673bdfbbdf4b5e07();
    });
  }
});
