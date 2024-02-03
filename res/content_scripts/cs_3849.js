
function mudfish_adclean_8bdf6edc3f2d9d160f936ba651cd511d() {
  try {
    Sizzle(`#mw_mobile > section[style]:has(> #coupang_cover_box > #coupang_ad_box)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8bdf6edc3f2d9d160f936ba651cd511d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8bdf6edc3f2d9d160f936ba651cd511d, function (items) {
  if (mudfish_adclean_g_conf_8bdf6edc3f2d9d160f936ba651cd511d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8bdf6edc3f2d9d160f936ba651cd511d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8bdf6edc3f2d9d160f936ba651cd511d();
    });
  }
});
