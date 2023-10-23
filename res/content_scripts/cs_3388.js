
function mudfish_adclean_e22dc814efc8c1313509949ea69747bd() {
  try {
    Sizzle(`ul[class^="ad"]`).forEach(element => {
      element.style.remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e22dc814efc8c1313509949ea69747bd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e22dc814efc8c1313509949ea69747bd, function (items) {
  if (mudfish_adclean_g_conf_e22dc814efc8c1313509949ea69747bd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e22dc814efc8c1313509949ea69747bd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e22dc814efc8c1313509949ea69747bd();
    });
  }
});
