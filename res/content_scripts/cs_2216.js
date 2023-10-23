
function mudfish_adclean_80a58a5a7df2915d302d8ec6aaa5193d() {
  try {
    Sizzle(`#welcome-ad`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_80a58a5a7df2915d302d8ec6aaa5193d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_80a58a5a7df2915d302d8ec6aaa5193d, function (items) {
  if (mudfish_adclean_g_conf_80a58a5a7df2915d302d8ec6aaa5193d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_80a58a5a7df2915d302d8ec6aaa5193d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_80a58a5a7df2915d302d8ec6aaa5193d();
    });
  }
});
