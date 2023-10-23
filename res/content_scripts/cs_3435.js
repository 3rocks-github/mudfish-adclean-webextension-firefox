
function mudfish_adclean_7e9e89d5e5808b84262177a0585872b8() {
  try {
    Sizzle(`div[class^="KeyVisualBanner_container_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7e9e89d5e5808b84262177a0585872b8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7e9e89d5e5808b84262177a0585872b8, function (items) {
  if (mudfish_adclean_g_conf_7e9e89d5e5808b84262177a0585872b8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7e9e89d5e5808b84262177a0585872b8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7e9e89d5e5808b84262177a0585872b8();
    });
  }
});
