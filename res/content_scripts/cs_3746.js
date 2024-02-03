
function mudfish_adclean_226f0a5580a69e243b8bd65b6c997517() {
  try {
    Sizzle(`[class*="_ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_226f0a5580a69e243b8bd65b6c997517 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_226f0a5580a69e243b8bd65b6c997517, function (items) {
  if (mudfish_adclean_g_conf_226f0a5580a69e243b8bd65b6c997517.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_226f0a5580a69e243b8bd65b6c997517();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_226f0a5580a69e243b8bd65b6c997517();
    });
  }
});
