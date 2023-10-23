
function mudfish_adclean_f4024f26c6f0da8c0c1e3fd761659d2c() {
  try {
    Sizzle(`div[id^="better-ads-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f4024f26c6f0da8c0c1e3fd761659d2c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f4024f26c6f0da8c0c1e3fd761659d2c, function (items) {
  if (mudfish_adclean_g_conf_f4024f26c6f0da8c0c1e3fd761659d2c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f4024f26c6f0da8c0c1e3fd761659d2c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f4024f26c6f0da8c0c1e3fd761659d2c();
    });
  }
});
