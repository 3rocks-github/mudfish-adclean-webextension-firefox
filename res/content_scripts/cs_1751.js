
function mudfish_adclean_12a7ca5a1db5e4f496962b2780a3af21() {
  try {
    Sizzle(`section.content .thumbnail-area`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_12a7ca5a1db5e4f496962b2780a3af21 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_12a7ca5a1db5e4f496962b2780a3af21, function (items) {
  if (mudfish_adclean_g_conf_12a7ca5a1db5e4f496962b2780a3af21.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_12a7ca5a1db5e4f496962b2780a3af21();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_12a7ca5a1db5e4f496962b2780a3af21();
    });
  }
});
