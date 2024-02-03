
function mudfish_adclean_8f22f26f6a08103da4e5053b6de5f7a4() {
  try {
    Sizzle(`.view-mobile div[class*="margin-"]:has(#main_bn)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8f22f26f6a08103da4e5053b6de5f7a4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8f22f26f6a08103da4e5053b6de5f7a4, function (items) {
  if (mudfish_adclean_g_conf_8f22f26f6a08103da4e5053b6de5f7a4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8f22f26f6a08103da4e5053b6de5f7a4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8f22f26f6a08103da4e5053b6de5f7a4();
    });
  }
});
