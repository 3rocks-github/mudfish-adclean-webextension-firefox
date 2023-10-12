
function mudfish_adclean_ef4b39d7110b3790e8d4e67ffa54c94d() {
  try {
    Sizzle(`article[class$="-banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ef4b39d7110b3790e8d4e67ffa54c94d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ef4b39d7110b3790e8d4e67ffa54c94d, function (items) {
  if (mudfish_adclean_g_conf_ef4b39d7110b3790e8d4e67ffa54c94d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ef4b39d7110b3790e8d4e67ffa54c94d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
