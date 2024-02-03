
function mudfish_adclean_042090c89e0b370755efe632b95e500d() {
  try {
    Sizzle(`#powerShoppingContent`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_042090c89e0b370755efe632b95e500d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_042090c89e0b370755efe632b95e500d, function (items) {
  if (mudfish_adclean_g_conf_042090c89e0b370755efe632b95e500d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_042090c89e0b370755efe632b95e500d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_042090c89e0b370755efe632b95e500d();
    });
  }
});
