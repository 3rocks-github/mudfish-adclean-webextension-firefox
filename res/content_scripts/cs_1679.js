
function mudfish_adclean_15b8e6b26ee8d1efb4e6cc428e1afac9() {
  try {
    Sizzle(`#bbs_inform li[class^="bbs_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_15b8e6b26ee8d1efb4e6cc428e1afac9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_15b8e6b26ee8d1efb4e6cc428e1afac9, function (items) {
  if (mudfish_adclean_g_conf_15b8e6b26ee8d1efb4e6cc428e1afac9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_15b8e6b26ee8d1efb4e6cc428e1afac9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_15b8e6b26ee8d1efb4e6cc428e1afac9();
    });
  }
});
