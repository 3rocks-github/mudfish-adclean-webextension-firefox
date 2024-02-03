
function mudfish_adclean_446882b4d92e447b0462a35392fd8976() {
  try {
    Sizzle(`.banner.container > .row > .col-6`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_446882b4d92e447b0462a35392fd8976 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_446882b4d92e447b0462a35392fd8976, function (items) {
  if (mudfish_adclean_g_conf_446882b4d92e447b0462a35392fd8976.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_446882b4d92e447b0462a35392fd8976();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_446882b4d92e447b0462a35392fd8976();
    });
  }
});
