
function mudfish_adclean_3c65f8f960e3a85ccf26ad7dd8bd8aba() {
  try {
    Sizzle(`#danawa_wrap > .ttop_banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3c65f8f960e3a85ccf26ad7dd8bd8aba = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3c65f8f960e3a85ccf26ad7dd8bd8aba, function (items) {
  if (mudfish_adclean_g_conf_3c65f8f960e3a85ccf26ad7dd8bd8aba.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3c65f8f960e3a85ccf26ad7dd8bd8aba();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
