
function mudfish_adclean_b48743042afe7c1254a09ad9ce29cf89() {
  try {
    Sizzle(`div[style]#side-scroll-in article + .box-margins ~ div[class]:has(~ article.box-skin ~ article ~ article)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b48743042afe7c1254a09ad9ce29cf89 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b48743042afe7c1254a09ad9ce29cf89, function (items) {
  if (mudfish_adclean_g_conf_b48743042afe7c1254a09ad9ce29cf89.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b48743042afe7c1254a09ad9ce29cf89();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
