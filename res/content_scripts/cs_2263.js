
function mudfish_adclean_920cd2b2e4614c3ec9cf7ae73c43d698() {
  try {
    Sizzle(`#hidden1`).forEach(element => {
      element.style.display = "block !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_920cd2b2e4614c3ec9cf7ae73c43d698 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_920cd2b2e4614c3ec9cf7ae73c43d698, function (items) {
  if (mudfish_adclean_g_conf_920cd2b2e4614c3ec9cf7ae73c43d698.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_920cd2b2e4614c3ec9cf7ae73c43d698();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_920cd2b2e4614c3ec9cf7ae73c43d698();
    });
  }
});
