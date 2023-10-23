
function mudfish_adclean_aaa86f4e0dd193342e0e7670b96bf748() {
  try {
    Sizzle(`.ask_hamburger_wrapper`).forEach(element => {
      element.style.top = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_aaa86f4e0dd193342e0e7670b96bf748 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_aaa86f4e0dd193342e0e7670b96bf748, function (items) {
  if (mudfish_adclean_g_conf_aaa86f4e0dd193342e0e7670b96bf748.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_aaa86f4e0dd193342e0e7670b96bf748();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_aaa86f4e0dd193342e0e7670b96bf748();
    });
  }
});
