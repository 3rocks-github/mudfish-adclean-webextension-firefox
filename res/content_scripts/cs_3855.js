
function mudfish_adclean_96a8f662b7f472eec330710513872db9() {
  try {
    Sizzle(`ul[class] > li:has(> a[href*="tokkiweb.com"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_96a8f662b7f472eec330710513872db9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_96a8f662b7f472eec330710513872db9, function (items) {
  if (mudfish_adclean_g_conf_96a8f662b7f472eec330710513872db9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_96a8f662b7f472eec330710513872db9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_96a8f662b7f472eec330710513872db9();
    });
  }
});
