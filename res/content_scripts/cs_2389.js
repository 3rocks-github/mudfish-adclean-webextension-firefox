
function mudfish_adclean_b55ac4b2177aff2ad95335f75e09fdf0() {
  try {
    Sizzle(`#cts .l-grid--nobg:has(button[data-log-actionid-area="power"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b55ac4b2177aff2ad95335f75e09fdf0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b55ac4b2177aff2ad95335f75e09fdf0, function (items) {
  if (mudfish_adclean_g_conf_b55ac4b2177aff2ad95335f75e09fdf0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b55ac4b2177aff2ad95335f75e09fdf0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
