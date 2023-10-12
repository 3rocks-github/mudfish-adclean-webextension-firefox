
function mudfish_adclean_dac0ee93b16a455a9a18cabf19ed661b() {
  try {
    Sizzle(`.top-keyword`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_dac0ee93b16a455a9a18cabf19ed661b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_dac0ee93b16a455a9a18cabf19ed661b, function (items) {
  if (mudfish_adclean_g_conf_dac0ee93b16a455a9a18cabf19ed661b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_dac0ee93b16a455a9a18cabf19ed661b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
