
function mudfish_adclean_ac3026cbaeb59f00650823637c13a78a() {
  try {
    Sizzle(`#shoppingMenu`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ac3026cbaeb59f00650823637c13a78a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ac3026cbaeb59f00650823637c13a78a, function (items) {
  if (mudfish_adclean_g_conf_ac3026cbaeb59f00650823637c13a78a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ac3026cbaeb59f00650823637c13a78a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
