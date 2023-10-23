
function mudfish_adclean_d893c4b521c4a60b0619f26e1954022c() {
  try {
    Sizzle(`.layout-main .main-menu`).forEach(element => {
      element.style.top = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d893c4b521c4a60b0619f26e1954022c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d893c4b521c4a60b0619f26e1954022c, function (items) {
  if (mudfish_adclean_g_conf_d893c4b521c4a60b0619f26e1954022c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d893c4b521c4a60b0619f26e1954022c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d893c4b521c4a60b0619f26e1954022c();
    });
  }
});
