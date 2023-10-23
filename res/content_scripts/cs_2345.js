
function mudfish_adclean_e9cb3d7ab9d0993908091e2dd157855f() {
  try {
    Sizzle(`.errorlay .new-login-warp`).forEach(element => {
      element.style.paddingTop = "20px !important";
element.style.marginLeft = "calc(50% - 232.5px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e9cb3d7ab9d0993908091e2dd157855f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e9cb3d7ab9d0993908091e2dd157855f, function (items) {
  if (mudfish_adclean_g_conf_e9cb3d7ab9d0993908091e2dd157855f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e9cb3d7ab9d0993908091e2dd157855f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e9cb3d7ab9d0993908091e2dd157855f();
    });
  }
});
