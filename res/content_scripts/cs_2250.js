
function mudfish_adclean_0ba96d12244316976b3eac0e2cc03fc2() {
  try {
    Sizzle(`.modrow-top > div[class$="_banner"][id$="Banner"]`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0ba96d12244316976b3eac0e2cc03fc2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0ba96d12244316976b3eac0e2cc03fc2, function (items) {
  if (mudfish_adclean_g_conf_0ba96d12244316976b3eac0e2cc03fc2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0ba96d12244316976b3eac0e2cc03fc2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0ba96d12244316976b3eac0e2cc03fc2();
    });
  }
});
