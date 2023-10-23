
function mudfish_adclean_c5f13c272556f7b2ea7e6c7f25a2d76a() {
  try {
    Sizzle(`.login_inputbox .inner`).forEach(element => {
      element.style.width = "calc(100% - 115px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c5f13c272556f7b2ea7e6c7f25a2d76a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c5f13c272556f7b2ea7e6c7f25a2d76a, function (items) {
  if (mudfish_adclean_g_conf_c5f13c272556f7b2ea7e6c7f25a2d76a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c5f13c272556f7b2ea7e6c7f25a2d76a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c5f13c272556f7b2ea7e6c7f25a2d76a();
    });
  }
});
