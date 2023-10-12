
function mudfish_adclean_b10e60475d9821a101a21d0db508ab03() {
  try {
    Sizzle(`#danawa-gnb-banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b10e60475d9821a101a21d0db508ab03 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b10e60475d9821a101a21d0db508ab03, function (items) {
  if (mudfish_adclean_g_conf_b10e60475d9821a101a21d0db508ab03.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b10e60475d9821a101a21d0db508ab03();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
