
function mudfish_adclean_0747526cfcf14d83605c47e52249cfcc() {
  try {
    Sizzle(`.user_view`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0747526cfcf14d83605c47e52249cfcc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0747526cfcf14d83605c47e52249cfcc, function (items) {
  if (mudfish_adclean_g_conf_0747526cfcf14d83605c47e52249cfcc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0747526cfcf14d83605c47e52249cfcc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0747526cfcf14d83605c47e52249cfcc();
    });
  }
});
