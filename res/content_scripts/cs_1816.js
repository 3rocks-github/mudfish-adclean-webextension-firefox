
function mudfish_adclean_f305ed7bc79519e39a461477ee40bb9a() {
  try {
    Sizzle(`.cpz_inner .sta_rolling_banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f305ed7bc79519e39a461477ee40bb9a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f305ed7bc79519e39a461477ee40bb9a, function (items) {
  if (mudfish_adclean_g_conf_f305ed7bc79519e39a461477ee40bb9a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f305ed7bc79519e39a461477ee40bb9a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f305ed7bc79519e39a461477ee40bb9a();
    });
  }
});
