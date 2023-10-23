
function mudfish_adclean_289e8ecdee10572308a95149ee8d0e8f() {
  try {
    Sizzle(`.gall_list .ub-content:not(.us-post):has(a[href*="//addc.dcinside.com/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_289e8ecdee10572308a95149ee8d0e8f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_289e8ecdee10572308a95149ee8d0e8f, function (items) {
  if (mudfish_adclean_g_conf_289e8ecdee10572308a95149ee8d0e8f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_289e8ecdee10572308a95149ee8d0e8f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_289e8ecdee10572308a95149ee8d0e8f();
    });
  }
});
