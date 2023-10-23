
function mudfish_adclean_52ff5c12f364cf4e86f69646f0ecbe4a() {
  try {
    Sizzle(`img[src*="//image.munhwa.com/www/banner/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_52ff5c12f364cf4e86f69646f0ecbe4a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_52ff5c12f364cf4e86f69646f0ecbe4a, function (items) {
  if (mudfish_adclean_g_conf_52ff5c12f364cf4e86f69646f0ecbe4a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_52ff5c12f364cf4e86f69646f0ecbe4a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_52ff5c12f364cf4e86f69646f0ecbe4a();
    });
  }
});
