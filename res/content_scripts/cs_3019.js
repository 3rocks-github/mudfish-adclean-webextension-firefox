
function mudfish_adclean_aef781885321539d6dbccc00ebf50ab0() {
  try {
    Sizzle(`div[id$="_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_aef781885321539d6dbccc00ebf50ab0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_aef781885321539d6dbccc00ebf50ab0, function (items) {
  if (mudfish_adclean_g_conf_aef781885321539d6dbccc00ebf50ab0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_aef781885321539d6dbccc00ebf50ab0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
