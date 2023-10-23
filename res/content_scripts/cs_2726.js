
function mudfish_adclean_91070c386861483b7ed39c3fa3ce08d0() {
  try {
    Sizzle(`.hideBtn`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_91070c386861483b7ed39c3fa3ce08d0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_91070c386861483b7ed39c3fa3ce08d0, function (items) {
  if (mudfish_adclean_g_conf_91070c386861483b7ed39c3fa3ce08d0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_91070c386861483b7ed39c3fa3ce08d0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_91070c386861483b7ed39c3fa3ce08d0();
    });
  }
});
