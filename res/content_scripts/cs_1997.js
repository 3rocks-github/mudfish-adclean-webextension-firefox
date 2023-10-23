
function mudfish_adclean_a56950f89a41e0d763ce9d5db57fe2b3() {
  try {
    Sizzle(`a[href^="/ws/include/banner_link.asp?"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a56950f89a41e0d763ce9d5db57fe2b3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a56950f89a41e0d763ce9d5db57fe2b3, function (items) {
  if (mudfish_adclean_g_conf_a56950f89a41e0d763ce9d5db57fe2b3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a56950f89a41e0d763ce9d5db57fe2b3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a56950f89a41e0d763ce9d5db57fe2b3();
    });
  }
});
