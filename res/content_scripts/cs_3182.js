
function mudfish_adclean_658d0cbe18b516a4459720d67e7673d3() {
  try {
    Sizzle(`.payment_fullbnr`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_658d0cbe18b516a4459720d67e7673d3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_658d0cbe18b516a4459720d67e7673d3, function (items) {
  if (mudfish_adclean_g_conf_658d0cbe18b516a4459720d67e7673d3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_658d0cbe18b516a4459720d67e7673d3();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
