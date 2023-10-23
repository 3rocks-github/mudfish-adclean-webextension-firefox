
function mudfish_adclean_6981153aa4bc6cf8ada6dd79237f8f43() {
  try {
    Sizzle(`a[href^="javascript:"][onclick^="banner_open("]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6981153aa4bc6cf8ada6dd79237f8f43 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6981153aa4bc6cf8ada6dd79237f8f43, function (items) {
  if (mudfish_adclean_g_conf_6981153aa4bc6cf8ada6dd79237f8f43.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6981153aa4bc6cf8ada6dd79237f8f43();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6981153aa4bc6cf8ada6dd79237f8f43();
    });
  }
});
