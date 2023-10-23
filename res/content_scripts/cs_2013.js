
function mudfish_adclean_5fce561061d716c7473b7fd0041a78f0() {
  try {
    Sizzle(`body > div[class^="brand-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5fce561061d716c7473b7fd0041a78f0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5fce561061d716c7473b7fd0041a78f0, function (items) {
  if (mudfish_adclean_g_conf_5fce561061d716c7473b7fd0041a78f0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5fce561061d716c7473b7fd0041a78f0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5fce561061d716c7473b7fd0041a78f0();
    });
  }
});
