
function mudfish_adclean_35da87199346d51dc3ab808a9923ba8b() {
  try {
    Sizzle(`.border-box tbody tr:has(td:contains(광고) ~ td a[href])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_35da87199346d51dc3ab808a9923ba8b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_35da87199346d51dc3ab808a9923ba8b, function (items) {
  if (mudfish_adclean_g_conf_35da87199346d51dc3ab808a9923ba8b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_35da87199346d51dc3ab808a9923ba8b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
