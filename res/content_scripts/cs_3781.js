
function mudfish_adclean_b00b8194b6bf65cf927ac526eb289ad6() {
  try {
    Sizzle(`.wid`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b00b8194b6bf65cf927ac526eb289ad6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b00b8194b6bf65cf927ac526eb289ad6, function (items) {
  if (mudfish_adclean_g_conf_b00b8194b6bf65cf927ac526eb289ad6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b00b8194b6bf65cf927ac526eb289ad6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b00b8194b6bf65cf927ac526eb289ad6();
    });
  }
});
