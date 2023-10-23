
function mudfish_adclean_c647e9ed351bf75bea726230785ae952() {
  try {
    Sizzle(`#txt_area.article > .art_btm`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c647e9ed351bf75bea726230785ae952 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c647e9ed351bf75bea726230785ae952, function (items) {
  if (mudfish_adclean_g_conf_c647e9ed351bf75bea726230785ae952.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c647e9ed351bf75bea726230785ae952();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c647e9ed351bf75bea726230785ae952();
    });
  }
});
