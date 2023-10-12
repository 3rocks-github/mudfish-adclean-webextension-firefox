
function mudfish_adclean_cd7c41b74ce9ac70a5bc8c31f894e0b8() {
  try {
    Sizzle(`div[class*="_banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cd7c41b74ce9ac70a5bc8c31f894e0b8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cd7c41b74ce9ac70a5bc8c31f894e0b8, function (items) {
  if (mudfish_adclean_g_conf_cd7c41b74ce9ac70a5bc8c31f894e0b8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cd7c41b74ce9ac70a5bc8c31f894e0b8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
