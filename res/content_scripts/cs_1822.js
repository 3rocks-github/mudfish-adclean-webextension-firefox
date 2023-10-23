
function mudfish_adclean_ecccb3708e60483c199e9ee08a88016e() {
  try {
    Sizzle(`[class^="banner-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ecccb3708e60483c199e9ee08a88016e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ecccb3708e60483c199e9ee08a88016e, function (items) {
  if (mudfish_adclean_g_conf_ecccb3708e60483c199e9ee08a88016e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ecccb3708e60483c199e9ee08a88016e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ecccb3708e60483c199e9ee08a88016e();
    });
  }
});
