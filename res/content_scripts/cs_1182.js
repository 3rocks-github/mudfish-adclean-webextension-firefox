
function mudfish_adclean_0e3df9535a189636a5f8ea9d4a2ec1e5() {
  try {
    Sizzle(`section[class*="-ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0e3df9535a189636a5f8ea9d4a2ec1e5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0e3df9535a189636a5f8ea9d4a2ec1e5, function (items) {
  if (mudfish_adclean_g_conf_0e3df9535a189636a5f8ea9d4a2ec1e5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0e3df9535a189636a5f8ea9d4a2ec1e5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0e3df9535a189636a5f8ea9d4a2ec1e5();
    });
  }
});
