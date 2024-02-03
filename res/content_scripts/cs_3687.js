
function mudfish_adclean_7c6f64d5570bcaacee466d9265900d90() {
  try {
    Sizzle(`div[id^="banner"][class=""][style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7c6f64d5570bcaacee466d9265900d90 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7c6f64d5570bcaacee466d9265900d90, function (items) {
  if (mudfish_adclean_g_conf_7c6f64d5570bcaacee466d9265900d90.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7c6f64d5570bcaacee466d9265900d90();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7c6f64d5570bcaacee466d9265900d90();
    });
  }
});
