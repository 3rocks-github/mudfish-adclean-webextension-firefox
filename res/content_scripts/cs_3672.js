
function mudfish_adclean_f97b4ff4043327a1f9e4635e10f77147() {
  try {
    Sizzle(`div[id^="clickmon_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f97b4ff4043327a1f9e4635e10f77147 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f97b4ff4043327a1f9e4635e10f77147, function (items) {
  if (mudfish_adclean_g_conf_f97b4ff4043327a1f9e4635e10f77147.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f97b4ff4043327a1f9e4635e10f77147();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f97b4ff4043327a1f9e4635e10f77147();
    });
  }
});
