
function mudfish_adclean_36b7aad8423e482f02ef50960609cb37() {
  try {
    Sizzle(`#navyismMainContainer > div[style] + div:not([style*=" "]):not([id])j`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_36b7aad8423e482f02ef50960609cb37 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_36b7aad8423e482f02ef50960609cb37, function (items) {
  if (mudfish_adclean_g_conf_36b7aad8423e482f02ef50960609cb37.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_36b7aad8423e482f02ef50960609cb37();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_36b7aad8423e482f02ef50960609cb37();
    });
  }
});
