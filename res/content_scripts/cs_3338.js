
function mudfish_adclean_ecb73e8ff3f552678831663c47ec03a5() {
  try {
    Sizzle(`.hideBtn`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ecb73e8ff3f552678831663c47ec03a5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ecb73e8ff3f552678831663c47ec03a5, function (items) {
  if (mudfish_adclean_g_conf_ecb73e8ff3f552678831663c47ec03a5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ecb73e8ff3f552678831663c47ec03a5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ecb73e8ff3f552678831663c47ec03a5();
    });
  }
});
