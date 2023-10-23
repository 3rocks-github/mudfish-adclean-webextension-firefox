
function mudfish_adclean_2dad87cfb58d7bfa599f061105a83236() {
  try {
    Sizzle(`[data-log-actionid-area*="plus"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2dad87cfb58d7bfa599f061105a83236 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2dad87cfb58d7bfa599f061105a83236, function (items) {
  if (mudfish_adclean_g_conf_2dad87cfb58d7bfa599f061105a83236.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2dad87cfb58d7bfa599f061105a83236();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2dad87cfb58d7bfa599f061105a83236();
    });
  }
});
