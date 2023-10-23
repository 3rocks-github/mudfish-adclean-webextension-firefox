
function mudfish_adclean_a58ca3a5898fe07c490efe7f0bfc72bd() {
  try {
    Sizzle(`.module.module_plugin a[href*="//link.coupang.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a58ca3a5898fe07c490efe7f0bfc72bd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a58ca3a5898fe07c490efe7f0bfc72bd, function (items) {
  if (mudfish_adclean_g_conf_a58ca3a5898fe07c490efe7f0bfc72bd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a58ca3a5898fe07c490efe7f0bfc72bd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a58ca3a5898fe07c490efe7f0bfc72bd();
    });
  }
});
