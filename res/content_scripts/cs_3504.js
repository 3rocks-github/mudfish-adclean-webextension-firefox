
function mudfish_adclean_8648dfcee38a3a7580f60796614fdc56() {
  try {
    Sizzle(`.wcms_side div[style^="padding-top:"].aside div[class$="_ad"] + .h20 + .line`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8648dfcee38a3a7580f60796614fdc56 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8648dfcee38a3a7580f60796614fdc56, function (items) {
  if (mudfish_adclean_g_conf_8648dfcee38a3a7580f60796614fdc56.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8648dfcee38a3a7580f60796614fdc56();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8648dfcee38a3a7580f60796614fdc56();
    });
  }
});
