
function mudfish_adclean_4d78ff5320a22f3c3d326868aa841712() {
  try {
    Sizzle(`.content`).forEach(element => {
      element.style.marginTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4d78ff5320a22f3c3d326868aa841712 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4d78ff5320a22f3c3d326868aa841712, function (items) {
  if (mudfish_adclean_g_conf_4d78ff5320a22f3c3d326868aa841712.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4d78ff5320a22f3c3d326868aa841712();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4d78ff5320a22f3c3d326868aa841712();
    });
  }
});
