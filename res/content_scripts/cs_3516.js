
function mudfish_adclean_6f8647f62983d3985cb73af635534dda() {
  try {
    Sizzle(`.article_area > .article_right`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6f8647f62983d3985cb73af635534dda = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6f8647f62983d3985cb73af635534dda, function (items) {
  if (mudfish_adclean_g_conf_6f8647f62983d3985cb73af635534dda.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6f8647f62983d3985cb73af635534dda();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6f8647f62983d3985cb73af635534dda();
    });
  }
});
