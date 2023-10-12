
function mudfish_adclean_14a0212aa0c9be8872ec765134532f05() {
  try {
    Sizzle(`main > div[style*=" "].section`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_14a0212aa0c9be8872ec765134532f05 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_14a0212aa0c9be8872ec765134532f05, function (items) {
  if (mudfish_adclean_g_conf_14a0212aa0c9be8872ec765134532f05.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_14a0212aa0c9be8872ec765134532f05();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
