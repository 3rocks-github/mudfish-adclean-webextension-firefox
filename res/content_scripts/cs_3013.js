
function mudfish_adclean_16efd3be5a7418ca135ee8ec28f1276b() {
  try {
    Sizzle(`div[class*="-ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_16efd3be5a7418ca135ee8ec28f1276b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_16efd3be5a7418ca135ee8ec28f1276b, function (items) {
  if (mudfish_adclean_g_conf_16efd3be5a7418ca135ee8ec28f1276b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_16efd3be5a7418ca135ee8ec28f1276b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_16efd3be5a7418ca135ee8ec28f1276b();
    });
  }
});
