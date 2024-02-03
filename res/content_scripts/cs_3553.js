
function mudfish_adclean_e63142fe4ee90b8bea5f7d775fd36a1b() {
  try {
    Sizzle(`article > div[class]:not([class*=" "]) ~ div[class*=" "]:has(iframe[src*="arca.live/external/callad"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e63142fe4ee90b8bea5f7d775fd36a1b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e63142fe4ee90b8bea5f7d775fd36a1b, function (items) {
  if (mudfish_adclean_g_conf_e63142fe4ee90b8bea5f7d775fd36a1b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e63142fe4ee90b8bea5f7d775fd36a1b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e63142fe4ee90b8bea5f7d775fd36a1b();
    });
  }
});
