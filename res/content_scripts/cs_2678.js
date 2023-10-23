
function mudfish_adclean_3a1f2a45ae73f6df09669c3baaa29608() {
  try {
    Sizzle(`#view_warning .relative:has(ins.adsbygoogle):not([class*="_content"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3a1f2a45ae73f6df09669c3baaa29608 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3a1f2a45ae73f6df09669c3baaa29608, function (items) {
  if (mudfish_adclean_g_conf_3a1f2a45ae73f6df09669c3baaa29608.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3a1f2a45ae73f6df09669c3baaa29608();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3a1f2a45ae73f6df09669c3baaa29608();
    });
  }
});
