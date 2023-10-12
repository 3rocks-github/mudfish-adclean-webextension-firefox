
function mudfish_adclean_c3e13137e69d082f9f9640785d17ab4d() {
  try {
    Sizzle(`.news_view_con ~ div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c3e13137e69d082f9f9640785d17ab4d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c3e13137e69d082f9f9640785d17ab4d, function (items) {
  if (mudfish_adclean_g_conf_c3e13137e69d082f9f9640785d17ab4d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c3e13137e69d082f9f9640785d17ab4d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
