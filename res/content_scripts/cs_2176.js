
function mudfish_adclean_8cf2f850288f2934f7640041b64b48b0() {
  try {
    Sizzle(`div[class^="mobile-m ad720_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8cf2f850288f2934f7640041b64b48b0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8cf2f850288f2934f7640041b64b48b0, function (items) {
  if (mudfish_adclean_g_conf_8cf2f850288f2934f7640041b64b48b0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8cf2f850288f2934f7640041b64b48b0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8cf2f850288f2934f7640041b64b48b0();
    });
  }
});
