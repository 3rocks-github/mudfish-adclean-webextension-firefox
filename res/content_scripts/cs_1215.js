
function mudfish_adclean_7eae74a9bcdb6045d4a722c2ef4debf3() {
  try {
    Sizzle(`section[sc^="power"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7eae74a9bcdb6045d4a722c2ef4debf3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7eae74a9bcdb6045d4a722c2ef4debf3, function (items) {
  if (mudfish_adclean_g_conf_7eae74a9bcdb6045d4a722c2ef4debf3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7eae74a9bcdb6045d4a722c2ef4debf3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7eae74a9bcdb6045d4a722c2ef4debf3();
    });
  }
});
