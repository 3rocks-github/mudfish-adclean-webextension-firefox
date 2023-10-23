
function mudfish_adclean_71d1ba451f15bf0e68c6b622ec7b7621() {
  try {
    Sizzle(`table.bd_lst tr.notice:has(span.ad)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_71d1ba451f15bf0e68c6b622ec7b7621 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_71d1ba451f15bf0e68c6b622ec7b7621, function (items) {
  if (mudfish_adclean_g_conf_71d1ba451f15bf0e68c6b622ec7b7621.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_71d1ba451f15bf0e68c6b622ec7b7621();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_71d1ba451f15bf0e68c6b622ec7b7621();
    });
  }
});
