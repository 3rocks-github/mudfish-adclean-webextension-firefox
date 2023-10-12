
function mudfish_adclean_8c1880fc26809786353d33294cc7ead7() {
  try {
    Sizzle(`.hide_on_app_ios`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8c1880fc26809786353d33294cc7ead7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8c1880fc26809786353d33294cc7ead7, function (items) {
  if (mudfish_adclean_g_conf_8c1880fc26809786353d33294cc7ead7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8c1880fc26809786353d33294cc7ead7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
