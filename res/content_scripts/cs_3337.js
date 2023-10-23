
function mudfish_adclean_d0c29ac4462d3623a608ebb24c114aca() {
  try {
    Sizzle(`body[style]`).forEach(element => {
      element.style.overflow = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d0c29ac4462d3623a608ebb24c114aca = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d0c29ac4462d3623a608ebb24c114aca, function (items) {
  if (mudfish_adclean_g_conf_d0c29ac4462d3623a608ebb24c114aca.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d0c29ac4462d3623a608ebb24c114aca();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d0c29ac4462d3623a608ebb24c114aca();
    });
  }
});
