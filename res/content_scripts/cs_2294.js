
function mudfish_adclean_aa050660b4345f72b326da730b89c43b() {
  try {
    Sizzle(`.contentBox > .topNews > .con-L`).forEach(element => {
      element.style.borderTop = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_aa050660b4345f72b326da730b89c43b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_aa050660b4345f72b326da730b89c43b, function (items) {
  if (mudfish_adclean_g_conf_aa050660b4345f72b326da730b89c43b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_aa050660b4345f72b326da730b89c43b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
