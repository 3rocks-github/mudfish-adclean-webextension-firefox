
function mudfish_adclean_48c7518e2bd8cdeb94484b54df9b095c() {
  try {
    Sizzle(`#tfHeader > div[style]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_48c7518e2bd8cdeb94484b54df9b095c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_48c7518e2bd8cdeb94484b54df9b095c, function (items) {
  if (mudfish_adclean_g_conf_48c7518e2bd8cdeb94484b54df9b095c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_48c7518e2bd8cdeb94484b54df9b095c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_48c7518e2bd8cdeb94484b54df9b095c();
    });
  }
});
