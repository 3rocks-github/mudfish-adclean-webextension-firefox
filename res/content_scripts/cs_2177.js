
function mudfish_adclean_fe7faf471b04c8d5a63d8b0e447f5b05() {
  try {
    Sizzle(`[data-ez-name]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fe7faf471b04c8d5a63d8b0e447f5b05 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fe7faf471b04c8d5a63d8b0e447f5b05, function (items) {
  if (mudfish_adclean_g_conf_fe7faf471b04c8d5a63d8b0e447f5b05.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fe7faf471b04c8d5a63d8b0e447f5b05();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fe7faf471b04c8d5a63d8b0e447f5b05();
    });
  }
});
