
function mudfish_adclean_c443dcb8eaf5ccac673749cb9a2eab8c() {
  try {
    Sizzle(`div[class*="banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c443dcb8eaf5ccac673749cb9a2eab8c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c443dcb8eaf5ccac673749cb9a2eab8c, function (items) {
  if (mudfish_adclean_g_conf_c443dcb8eaf5ccac673749cb9a2eab8c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c443dcb8eaf5ccac673749cb9a2eab8c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c443dcb8eaf5ccac673749cb9a2eab8c();
    });
  }
});
