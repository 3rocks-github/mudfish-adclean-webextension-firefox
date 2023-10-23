
function mudfish_adclean_ddd2425dbd0efae2384860daa4d53516() {
  try {
    Sizzle(`a[rel*="sponsored"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ddd2425dbd0efae2384860daa4d53516 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ddd2425dbd0efae2384860daa4d53516, function (items) {
  if (mudfish_adclean_g_conf_ddd2425dbd0efae2384860daa4d53516.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ddd2425dbd0efae2384860daa4d53516();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ddd2425dbd0efae2384860daa4d53516();
    });
  }
});
