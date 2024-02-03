
function mudfish_adclean_0d9046652bbe32a5b94f7e00d917cabf() {
  try {
    Sizzle(`form[method="post"] > #maskLayer`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0d9046652bbe32a5b94f7e00d917cabf = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0d9046652bbe32a5b94f7e00d917cabf, function (items) {
  if (mudfish_adclean_g_conf_0d9046652bbe32a5b94f7e00d917cabf.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0d9046652bbe32a5b94f7e00d917cabf();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0d9046652bbe32a5b94f7e00d917cabf();
    });
  }
});
