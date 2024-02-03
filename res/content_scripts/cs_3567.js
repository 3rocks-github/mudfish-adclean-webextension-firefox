
function mudfish_adclean_b3159cebeabcbff65418831e1a0e8101() {
  try {
    Sizzle(`.contents > .gridArea`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b3159cebeabcbff65418831e1a0e8101 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b3159cebeabcbff65418831e1a0e8101, function (items) {
  if (mudfish_adclean_g_conf_b3159cebeabcbff65418831e1a0e8101.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b3159cebeabcbff65418831e1a0e8101();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b3159cebeabcbff65418831e1a0e8101();
    });
  }
});
