
function mudfish_adclean_7db2d7bf8d5966f7136146e38c3c8e1c() {
  try {
    Sizzle(`div[class^="col-sm-"] > div:not([style]) .basic-post-gallery`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7db2d7bf8d5966f7136146e38c3c8e1c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7db2d7bf8d5966f7136146e38c3c8e1c, function (items) {
  if (mudfish_adclean_g_conf_7db2d7bf8d5966f7136146e38c3c8e1c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7db2d7bf8d5966f7136146e38c3c8e1c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7db2d7bf8d5966f7136146e38c3c8e1c();
    });
  }
});
