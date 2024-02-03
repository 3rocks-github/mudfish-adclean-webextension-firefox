
function mudfish_adclean_6d7f4e547e46eefd6b99d7282422cdcb() {
  try {
    Sizzle(`article div:not([class*=" "]) ~ div div + div[class*=" "]:has(iframe[src*="arca.live/external/callad"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6d7f4e547e46eefd6b99d7282422cdcb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6d7f4e547e46eefd6b99d7282422cdcb, function (items) {
  if (mudfish_adclean_g_conf_6d7f4e547e46eefd6b99d7282422cdcb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6d7f4e547e46eefd6b99d7282422cdcb();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6d7f4e547e46eefd6b99d7282422cdcb();
    });
  }
});
