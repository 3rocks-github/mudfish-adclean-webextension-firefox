
function mudfish_adclean_062ced9015eb2e7e249f3e26c465a62a() {
  try {
    Sizzle(`#banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_062ced9015eb2e7e249f3e26c465a62a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_062ced9015eb2e7e249f3e26c465a62a, function (items) {
  if (mudfish_adclean_g_conf_062ced9015eb2e7e249f3e26c465a62a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_062ced9015eb2e7e249f3e26c465a62a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
