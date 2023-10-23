
function mudfish_adclean_32d2eb2161dc78d109661ae6f1a552d1() {
  try {
    Sizzle(`img[src*="//img.mediapen.com/banners/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_32d2eb2161dc78d109661ae6f1a552d1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_32d2eb2161dc78d109661ae6f1a552d1, function (items) {
  if (mudfish_adclean_g_conf_32d2eb2161dc78d109661ae6f1a552d1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_32d2eb2161dc78d109661ae6f1a552d1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_32d2eb2161dc78d109661ae6f1a552d1();
    });
  }
});
