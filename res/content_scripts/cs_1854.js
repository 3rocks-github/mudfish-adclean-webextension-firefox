
function mudfish_adclean_5667b2a67cb772818516cc3c60935a02() {
  try {
    Sizzle(`div[class][data-ad][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5667b2a67cb772818516cc3c60935a02 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5667b2a67cb772818516cc3c60935a02, function (items) {
  if (mudfish_adclean_g_conf_5667b2a67cb772818516cc3c60935a02.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5667b2a67cb772818516cc3c60935a02();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5667b2a67cb772818516cc3c60935a02();
    });
  }
});
