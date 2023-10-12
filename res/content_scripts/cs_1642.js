
function mudfish_adclean_8d4c251670a55460d96ec3fd0c04ee35() {
  try {
    Sizzle(`div[class*="-ad"]:not(.container):not([style])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8d4c251670a55460d96ec3fd0c04ee35 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8d4c251670a55460d96ec3fd0c04ee35, function (items) {
  if (mudfish_adclean_g_conf_8d4c251670a55460d96ec3fd0c04ee35.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8d4c251670a55460d96ec3fd0c04ee35();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
