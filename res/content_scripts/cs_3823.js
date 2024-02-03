
function mudfish_adclean_18ee3edb4852241637973b9ceaaa733a() {
  try {
    Sizzle(`.board-tail-banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_18ee3edb4852241637973b9ceaaa733a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_18ee3edb4852241637973b9ceaaa733a, function (items) {
  if (mudfish_adclean_g_conf_18ee3edb4852241637973b9ceaaa733a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_18ee3edb4852241637973b9ceaaa733a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_18ee3edb4852241637973b9ceaaa733a();
    });
  }
});
