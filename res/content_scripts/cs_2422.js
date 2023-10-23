
function mudfish_adclean_f412c50a110c8fcd0635348ead2c4449() {
  try {
    Sizzle(`.list_d.ldd > ul > li:has(script[src*="//pagead2.googlesyndication.com/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f412c50a110c8fcd0635348ead2c4449 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f412c50a110c8fcd0635348ead2c4449, function (items) {
  if (mudfish_adclean_g_conf_f412c50a110c8fcd0635348ead2c4449.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f412c50a110c8fcd0635348ead2c4449();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f412c50a110c8fcd0635348ead2c4449();
    });
  }
});
