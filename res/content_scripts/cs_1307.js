
function mudfish_adclean_c50324e2f8f5daecf8e14f544863332a() {
  try {
    Sizzle(`div[itemprop="articleBody"] > div[style*="margin-"]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c50324e2f8f5daecf8e14f544863332a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c50324e2f8f5daecf8e14f544863332a, function (items) {
  if (mudfish_adclean_g_conf_c50324e2f8f5daecf8e14f544863332a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c50324e2f8f5daecf8e14f544863332a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c50324e2f8f5daecf8e14f544863332a();
    });
  }
});
