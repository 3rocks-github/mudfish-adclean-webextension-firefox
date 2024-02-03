
function mudfish_adclean_fcd6079b03888bda0c7ee4b72fe7fa31() {
  try {
    Sizzle(`#page ~ div[style^="min-height:"]#content.row`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fcd6079b03888bda0c7ee4b72fe7fa31 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fcd6079b03888bda0c7ee4b72fe7fa31, function (items) {
  if (mudfish_adclean_g_conf_fcd6079b03888bda0c7ee4b72fe7fa31.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fcd6079b03888bda0c7ee4b72fe7fa31();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fcd6079b03888bda0c7ee4b72fe7fa31();
    });
  }
});
