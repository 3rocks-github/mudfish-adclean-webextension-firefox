
function mudfish_adclean_7eb164b5373df0fef2826881f3b06009() {
  try {
    Sizzle(`.view-wrap > div[class*=" "] + div[style*=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7eb164b5373df0fef2826881f3b06009 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7eb164b5373df0fef2826881f3b06009, function (items) {
  if (mudfish_adclean_g_conf_7eb164b5373df0fef2826881f3b06009.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7eb164b5373df0fef2826881f3b06009();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
