
function mudfish_adclean_4c1d74aeebcb11cd2e0fbc7a6ae0ec62() {
  try {
    Sizzle(`header > .header-body`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4c1d74aeebcb11cd2e0fbc7a6ae0ec62 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4c1d74aeebcb11cd2e0fbc7a6ae0ec62, function (items) {
  if (mudfish_adclean_g_conf_4c1d74aeebcb11cd2e0fbc7a6ae0ec62.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4c1d74aeebcb11cd2e0fbc7a6ae0ec62();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4c1d74aeebcb11cd2e0fbc7a6ae0ec62();
    });
  }
});
