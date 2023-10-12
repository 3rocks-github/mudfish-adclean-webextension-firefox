
function mudfish_adclean_dfbac47e3f2f6b078650e2f6f72771e0() {
  try {
    Sizzle(`#header ~ header`).forEach(element => {
      element.style.marginTop = "50px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_dfbac47e3f2f6b078650e2f6f72771e0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_dfbac47e3f2f6b078650e2f6f72771e0, function (items) {
  if (mudfish_adclean_g_conf_dfbac47e3f2f6b078650e2f6f72771e0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_dfbac47e3f2f6b078650e2f6f72771e0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
