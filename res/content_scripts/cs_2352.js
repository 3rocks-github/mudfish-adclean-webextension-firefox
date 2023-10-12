
function mudfish_adclean_c5142fbf0a89707ea96258a1d1811dbb() {
  try {
    Sizzle(`#body_wrap > #body_main > div[style]:nth-child(1), #body_wrap > #body_main > div[style]:nth-child(3)`).forEach(element => {
      element.style.width = "calc(50% - 5px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c5142fbf0a89707ea96258a1d1811dbb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c5142fbf0a89707ea96258a1d1811dbb, function (items) {
  if (mudfish_adclean_g_conf_c5142fbf0a89707ea96258a1d1811dbb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c5142fbf0a89707ea96258a1d1811dbb();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
