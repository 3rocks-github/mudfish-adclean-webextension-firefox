
function mudfish_adclean_f0663a61de534d5a29b2ca8bd5cc07d2() {
  try {
    Sizzle(`header.main-header`).forEach(element => {
      element.style.top = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f0663a61de534d5a29b2ca8bd5cc07d2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f0663a61de534d5a29b2ca8bd5cc07d2, function (items) {
  if (mudfish_adclean_g_conf_f0663a61de534d5a29b2ca8bd5cc07d2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f0663a61de534d5a29b2ca8bd5cc07d2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
