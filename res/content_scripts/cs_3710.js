
function mudfish_adclean_1aecacf5e62ea64882e3e5aefc555c0c() {
  try {
    Sizzle(`div[data-docsrl] ~ div[style^="height:"][style*="text-align:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1aecacf5e62ea64882e3e5aefc555c0c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1aecacf5e62ea64882e3e5aefc555c0c, function (items) {
  if (mudfish_adclean_g_conf_1aecacf5e62ea64882e3e5aefc555c0c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1aecacf5e62ea64882e3e5aefc555c0c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1aecacf5e62ea64882e3e5aefc555c0c();
    });
  }
});
