
function mudfish_adclean_a15aeada1e791af3d0ffe9581b1e5059() {
  try {
    Sizzle(`a[href*="//link.coupang.com/"][type]`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a15aeada1e791af3d0ffe9581b1e5059 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a15aeada1e791af3d0ffe9581b1e5059, function (items) {
  if (mudfish_adclean_g_conf_a15aeada1e791af3d0ffe9581b1e5059.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a15aeada1e791af3d0ffe9581b1e5059();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
