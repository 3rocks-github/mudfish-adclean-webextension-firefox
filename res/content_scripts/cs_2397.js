
function mudfish_adclean_629476d9d779a50aa0ecb87df8f59464() {
  try {
    Sizzle(`#gap > div[style*=": "].xe-widget-wrapper:has(.widget_banner_skin > .banner_list)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_629476d9d779a50aa0ecb87df8f59464 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_629476d9d779a50aa0ecb87df8f59464, function (items) {
  if (mudfish_adclean_g_conf_629476d9d779a50aa0ecb87df8f59464.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_629476d9d779a50aa0ecb87df8f59464();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
