
function mudfish_adclean_f4eff310ed14a709e2cd85ba70146ab6() {
  try {
    Sizzle(`.inwrap .right > div:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f4eff310ed14a709e2cd85ba70146ab6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f4eff310ed14a709e2cd85ba70146ab6, function (items) {
  if (mudfish_adclean_g_conf_f4eff310ed14a709e2cd85ba70146ab6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f4eff310ed14a709e2cd85ba70146ab6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
