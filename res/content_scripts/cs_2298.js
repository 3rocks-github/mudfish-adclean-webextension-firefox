
function mudfish_adclean_674ba994fcd889cdace386483f4f8544() {
  try {
    Sizzle(`.box-skin .mobile-popular`).forEach(element => {
      element.style.borderTop = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_674ba994fcd889cdace386483f4f8544 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_674ba994fcd889cdace386483f4f8544, function (items) {
  if (mudfish_adclean_g_conf_674ba994fcd889cdace386483f4f8544.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_674ba994fcd889cdace386483f4f8544();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_674ba994fcd889cdace386483f4f8544();
    });
  }
});
