
function mudfish_adclean_7fac30c0b6dd53166015562f9060fc24() {
  try {
    Sizzle(`.wrap.blocked .content_more_div`).forEach(element => {
      element.style.maxHeight = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7fac30c0b6dd53166015562f9060fc24 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7fac30c0b6dd53166015562f9060fc24, function (items) {
  if (mudfish_adclean_g_conf_7fac30c0b6dd53166015562f9060fc24.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7fac30c0b6dd53166015562f9060fc24();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
