
function mudfish_adclean_f33a233412a751d114eab0703bccfe92() {
  try {
    Sizzle(`div[class*="ad_section"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f33a233412a751d114eab0703bccfe92 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f33a233412a751d114eab0703bccfe92, function (items) {
  if (mudfish_adclean_g_conf_f33a233412a751d114eab0703bccfe92.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f33a233412a751d114eab0703bccfe92();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f33a233412a751d114eab0703bccfe92();
    });
  }
});
